import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Username", type: "email", placeholder: "test@test.com" },
            password: { label: "Password", type: "password" , placeholder:'********'}
          },
          async authorize(credentials, req) {
            //Cambiar esto dependiendo de la petición que haya que hacer al backend
            const res= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password
                    }),
                    
                    headers: {'Content-Type': 'application/json'},
                }
            )
            const user= await res.json()
            console.log(user);
            
            if(user.error) throw user;
            return user
          }
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        GithubProvider({
          clientId: process.env.GITHUB_CLIENT_ID as string,
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
      ],
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