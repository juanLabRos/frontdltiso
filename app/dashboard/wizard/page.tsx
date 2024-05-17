'use client'
import { useState, useEffect } from "react";
import Users from "@/app/dashboard/settings/testUsers.json";
import InputForm from "@/app/components/Wizzard/InputFormWizard";

export default function Wizzard() {
    const [userData, setUserData] = useState({
        id: 2,
        username: "",
        password: "",
        email: "",
        fullname: "",
        usertype: "",
        company: ""
    });

    const user = Users.find((user) => user.id === userData.id);

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
    }, [user]);

    const [message, setMessage] = useState("");
    const [chats, setChats] = useState<{ role: string; content: string; }[]>([]);
    const [isTyping, setIsTyping] = useState(false);

    const chat = (e: React.FormEvent<HTMLFormElement>, message: string) => {
        e.preventDefault();

        if (!message) return;

        setIsTyping(true);
        scrollTo(0, 1e10);

        let msgs = chats;
        msgs.push({ role: userData.username, content: message });
        setChats(msgs);

        setMessage("");
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow flex items-center justify-center flex-col md:flex-row w-full">
                <article className="m-2 text-center">
                    <h1 className="text-5xl font-bold text-customTeal-default">
                        Hola {userData.username}
                    </h1>
                    <h2 className="text-2xl">¿En qué puedo ayudarte?</h2>
                </article>
                
                <div className="flex flex-col gap-3 items-center mt-5 border border-black rounded-xl w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
                    {chats.map((chat, index) => (
                        <p key={index} className={chat.role === userData.username ? "user_msg" : ""}>
                            <span><b>{chat.role}</b>:</span>
                            <span>{chat.content}</span>
                        </p>
                    ))}

                    <div className={isTyping ? "" : "hidden"}>
                        <p><i>{isTyping ? "..." : ""}</i></p>
                    </div>
                    
                    <form onSubmit={(e) => chat(e, message)}>
                        <InputForm 
                            label="" 
                            name='mensaje' 
                            placeholder='Escriba aquí su mensaje...' 
                            type='text' 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        /> 
                    </form>
                </div>
            </div>
        </div>
    );
}
