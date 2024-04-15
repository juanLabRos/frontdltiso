import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import { z } from 'zod';
 


const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Username", type: "email", placeholder: "test@test.com" },
            password: { label: "Password", type: "password" , placeholder:'********'}
          },
          //Autorización de las credenciales
          async authorize(credentials, req) {
            //Validación con zod de las credenciales
            const res= z
              .object({
                email: z.string().email(),
                password: z.string().min(6)
              })
              .safeParse(credentials);
            //Si la valdiacion es correcta se procede a la autenticación
            if (res.success) {
              const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
                method: 'POST',
                body: JSON.stringify(res.data), 
                headers: { 'Content-Type': 'application/json' },
              });
              const user = await response.json();

              if (user.statusCode) throw user;
              return user;
            }
    
            console.log('Invalid credentials');
            return null;
            
          }
        }),
        //Faltan los datos de las credenciales de google y github
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GithubProvider({
          clientId: process.env.GITHUB_CLIENT_ID as string,
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
      ],
      secret: process.env.NEXTAUTH_SECRET,
      //Callbacks para manejar el token y la sesión
      callbacks: {
        async jwt({ token, user }: { token: any, user: any }) { 
          return { ...token, ...user };
        },
        async session({ session, token }: { session: any, token: any }) {
          session.user = token as any;
          return session;
        },
        
      },
      //Configuración de redirección
      //Esta sera la direccion a la que se redirigirá si el usuario no esta autenticado
      pages:{
        signIn:'/login'
      }

});

export { handler as GET, handler as POST}