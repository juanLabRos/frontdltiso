import { User, customErrorZod } from "@/app/lib/definitions";
import {  z } from "zod";

export async function register({data}:{data:User}){
  
    const schecma= z
      .object({
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        company: z.string()
      });
    const parsedData= schecma.safeParse(data)
    
    if(!parsedData.success){
      throw new Error( customErrorZod(parsedData.error.issues[0]));
    }
    debugger
    if (parsedData.success) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {  
          method: 'POST',
          body: JSON.stringify(parsedData.data), 
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await response.json();
        const partialUser={
          email:user.email,
          id:user.id,
        }
        return {user:partialUser};
    }
        
}
export async function activateAccount({activation_token,email}:{activation_token:number,email:string}){
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/activate`, {  
    method: 'POST',
          body: JSON.stringify({activation_token,email}), 
          headers: { 'Content-Type': 'application/json' },
    });
  const user = await response.json();
  return user;
}
