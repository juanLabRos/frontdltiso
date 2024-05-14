'use client'
import { useState, useEffect } from "react";
import Users from "@/app/dashboard/settings/testUsers.json";
import InputForm from "@/app/components/Wizzard/InputFormWizard"



export default function wizzard() {

    // OBTENER USUARIO
    const [userData, setUserData] = useState(
        {
            id: 2,
            username: "",
            password: "",
            email: "",
            fullname: "",
            usertype: "",
            company: ""
        }
    );

    const user = Users.find((user) => user.id === userData.id);

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
        Users.map((user) => user.username);
    }, [user]);
    
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState<{ role: string; content: string; }[]>([]);
    const [isTyping, setIsTyping] = useState(false);
  
    const chat = async (e: React.FormEvent<HTMLFormElement>, message: string) => {
        e.preventDefault();

        if (!message) return;
        setIsTyping(true);
        scrollTo(0,1e10)

        let msgs = chats;
        msgs.push({ role: userData.username, content: message });
        setChats(msgs);

        setMessage("");

    }; 


     return (
         <div className="flex h-screen">
             <div className="flex items-center justify-center h-fit flex-col md:flex-row max-w-full  w-11/12 md:w-5/6 lg:w-5/6 xl:w-11/12">
                <article className="m-2 w-100%">
                    <h1 className="text-5xl">
                        <span className="font-bold text-customTeal-default">Hola {userData.username}</span>
                    </h1>
                    <h2 className="text-2xl">¿En qué puedo ayudarte?</h2>
                </article>
                
                <div className="flex flex-col gap-3 items-center  mt-5 border border-black rounded-xl w-3/4 md:w-1/2 lg:w-1/2 ">

                    {chats && chats.length
                        ? chats.map((chat, index) => (
                            <p key={index} className={chat.role === userData.username ? "user_msg" : ""}>
                                <span>
                                <b>{chat.role}</b>
                                </span>
                                <span>:</span>
                                <span>{chat.content}</span>
                            </p>
                            ))
                        : ""}


                    {/* ----- RESPUESTA 270001 3  ------- */}

                                <div className={isTyping ? "" : "hide"}>
                                    <p>
                                    <i>{isTyping ? "..." : ""}</i>
                                    </p>
                                </div>
                    
                    <form action="" onSubmit={(e) => chat(e, message)}>
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
    )
 }
