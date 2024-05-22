'use client'
import { useState, useEffect } from "react";
import Users from "@/app/dashboard/settings/testUsers.json";
import InputForm from "@/app/components/Wizzard/InputFormWizard";
import Image from "next/image";
import { chatMessages } from "@/app/lib/data";

export default function Wizzard() {
    const [userData, setUserData] = useState({
        id: 2,
        username: "",
        password: "",
        email: "javier@yopmail.com",
        fullname: "",
        usertype: "",
        company: ""
    });

    const user = Users.find((user) => user.id === userData.id);

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
        const res=await chatMessages(target.mensaje.value, userData.email);
        await setLoading(false);
        console.log(res)
        setMessages((prev) => [...prev, res]);
        console.log(messages)
        console.log(messages);
        

    }

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow h-screen border flex items-center justify-around flex-col md:flex-row w-full">
                <article className="m-2 text-center">
                <h1 className="text-5xl font-bold text-customTeal-default">
                    Hola {userData.username}
                </h1>
                <h2 className="text-2xl text-customTeal-default">¿En qué puedo ayudarte?</h2>
                </article>

                <div className="flex flex-col h-5/6 py-16 justify-between px-5 relative gap-3 mt-5 border border-black rounded-xl w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="flex flex-col items-center justify-end space-y-4 overflow-y-auto h-full  mb-4 w-full">
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
                    {loading ? <div className="flex items-center bg-gray-400 self-start mr-36 p-4 rounded-lg space-x-1">
                        <span className="text-lg">Escribiendo</span>
                        <div className="flex space-x-1">
                            <span className="text-lg animate-bounce">.</span>
                            <span className="text-lg animate-bounce animation-delay-100">.</span>
                            <span className="text-lg animate-bounce animation-delay-200">.</span>
                        </div>
                        </div>
                    :''}
                </div>

                <form className="w-full flex absolute justify-around py-2 bottom-1" onSubmit={handleSubmit}>
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
        </div>  
    );
}
