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
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${mail}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${tkn.token}`
            },
        });

        const data = await response.json();
        console.log(data);
        
        if (data.length>0) return null;
        return data;
    } catch (error) {
        console.error("Error al obtener datos del servidor:", error);
        return null;
    }
} 
