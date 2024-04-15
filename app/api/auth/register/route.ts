import { User, customErrorZod } from "@/app/lib/definitions";
import {  z } from "zod";

export async function POST({data}:{data:User}){
  
    const schecma= z
      .object({
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        company: z.string()
      });
    const parsedData= schecma.safeParse(data)
    console.log(parsedData);
    
    if(!parsedData.success){
      throw new Error( customErrorZod(parsedData.error.issues[0]));
    }
    console.log(parsedData);
    if (parsedData.success) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {  
          method: 'POST',
          body: JSON.stringify(parsedData.data), 
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await response.json();
        console.log(user);
        
        return user;
    }
        
}

