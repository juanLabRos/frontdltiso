'use client'
import { useState, useEffect, useContext } from "react";
import InputForm from "@/app/components/Wizzard/InputFormWizard";
import Image from "next/image";
import { chatMessages } from "@/app/lib/data";
import { UserContext } from "@/app/context/UserContext";

export default function Wizzard() {

    const {usuario}= useContext(UserContext);
    const [messages, setMessages] = useState<any[]>([]); // Fix the type of setMessages
    const [chats, setChats] = useState("");
    const [loading, setLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const handleSubmit=async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            mensaje: { value: string };
        };
        
        setMessages((prev) => [target.mensaje.value,...prev]);     
        setLoading(true);
        if (usuario) {
            const res=await chatMessages(target.mensaje.value, usuario.email);
            await setLoading(false);
            console.log(res)
            setMessages((prev) => [...prev, res]);
        }
        setChats("");
        

    }

    return (
            <div className="flex-grow h-full border flex items-center justify-around gap-5 flex-col md:flex-row w-full">
                <article className="m-2 text-center w-1/5 ">
                    <h1 className="text-5xl font-bold text-customTeal-default">
                        Hola {usuario?.username}
                    </h1>
                    <h2 className="text-2xl text-customTeal-default">¿En qué puedo ayudarte?</h2>
                </article>

                <div className="flex flex-col h-5/6 max-h-[1000px] pt-5 justify-between  w-3/6  relative gap-3 mt-5 border border-black rounded-xl ">
                            <div className="flex flex-col items-center overflow-y-auto border  space-y-4 px-7 justify-end  h-full  mb-4 w-full">
                                {messages.map((message, index) => (
                                    <div
                                        key={index} 
                                        className={`p-4 rounded-lg ${
                                        index % 2 === 0
                                            ? 'bg-blue-500 text-white self-end ml-36'
                                            : 'bg-gray-400 self-start mr-36'
                                        }`}
                                    >
                                        {message}
                                    </div>
                                ))}
                                
                                {loading ? 
                                    <div className="flex items-center bg-gray-400 self-start mr-36 p-4 rounded-lg space-x-1">
                                        <span className="text-lg">Escribiendo</span>
                                        <div className="flex space-x-1">
                                            <span className="text-lg animate-bounce">.</span>
                                            <span className="text-lg animate-bounce animation-delay-100">.</span>
                                            <span className="text-lg animate-bounce animation-delay-200">.</span>
                                        </div>
                                    </div>
                                :''}
                            </div>
                            
                    <form className="w-full border-t flex justify-around py-4 bottom-1" onSubmit={handleSubmit}>
                        <InputForm
                        label=""
                        name="mensaje"
                        placeholder="Escriba aquí su mensaje..."
                        type="text"
                        value={loading? '':chats}
                        onChange={(e) => setChats(e.target.value)}
                        />
                        <button type="submit" className="bg-customTeal-default rounded-full text-white p-2 px-3">
                        <Image src={'/enviar.svg'} width={20} height={20} className="text-white" alt="" />
                        </button>
                    </form>
                </div>
            </div> 
    );
}
