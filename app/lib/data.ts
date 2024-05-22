'use server'

async function backConnect() {
    const data = {
        email: process.env.BD_EMAIL,
        password: process.env.BD_PASSWORD,
        userType: "Admin"
    }

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });
        
        const user = await response.json();

        if (user.statusCode) throw new Error(user.message); // Manejo de errores
        return user;
    } catch (error) {
        throw new Error('Error connecting to backend: ' + error);
    }
}

export async function fetchCheckMail({ mail }: { mail: string }) {
    try {
        const tkn = await backConnect();

        if (!tkn.token) return null;
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
            method: 'POST',
            body: JSON.stringify({ mail }),
            headers: { 
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${tkn.token}`
            },
        });

        const data = await response.json();
        if (data.length>0) return null;
        return data;
    } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
        return null;
    }
} 


export async function reSendEmail({email}: {email: string}){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/email/`, {
            method: 'POST',
            body: JSON.stringify({email}),
            headers: { 'Content-Type': 'application/json' },
        });

        const code = await response.json();
        if (code.statusCode) throw new Error(code.message); // Manejo de errores
        return code;
    } catch (error) {
        throw new Error('Error reSend Email: ' + error);
    }
}
export async function enviarKeyMail(email:string): Promise<boolean> {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/getPasswordKey`, {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' },
          });

        const code = await response.json();
        console.log(code)
        if (code.statusCode) throw new Error(code.message); // Manejo de errores
        return code;
    } catch (error) {
        throw new Error('Error reSend Email: ' + error);
    }
}

export async function getTokenPassword(id:string): Promise<boolean>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/resetPassword`, {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data
}

export async function chatMessages(text:string,email:string): Promise<string>{
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/questions/newQuestion`, {
        method: 'POST',
        body: JSON.stringify({ text,email }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    console.log(data.generatedText)
    return data.generatedText
} 