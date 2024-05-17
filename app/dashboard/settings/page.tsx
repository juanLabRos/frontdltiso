'use client'
import React, { useState, useEffect } from "react";
import { validateEmail } from "@/app/utils/validateEmail"
import { validatePassword } from "@/app/utils/validatePassword"
import Image from "next/image";
import user_img from "@/public/user_img.svg";
import InputForm from "@/app/components/Settings/InputFormSettings";
import ButtonCustom from "@/app/components/Settings/ButtonCustomSettings";

import Users from "./testUsers.json";

export default function Settings() {

    const [userData, setUserData] = useState(
        {
            id: 2,
            username: "",
            password: "", //123123
            email: "",
            fullname: "",
            usertype: "",
            company: ""
        }
    );

    //userName
    const [newUsername, setNewUsername] = useState("");
    const [existingUsernames, setExistingUsernames] = useState<string[]>([]);
    const [usernameError, setUsernameError] = useState(""); 
    const [fullName, setFullName] = useState("");
    
    //email
    const [newEmail, setNewEmail] = useState("");
    const [existingEmails, setExistingEmails] = useState<string[]>([]);
    const [emailError, setEmailError] = useState(""); 
    
    //password
    const [pass, setPass] = useState ("");
    const [newPass, setNewPass] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [passError, setPassError] = useState(""); 
    const [newPassError, setNewPassError] = useState("");

    const [saveStatus, setSaveStatus] = useState("");
    const user = Users.find((user) => user.id === userData.id);

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
        const usernames: string[] = Users.map((user) => user.username);
        setExistingUsernames(usernames);
        const emails: string[] = Users.map((user) => user.email);
        setExistingEmails(emails);
    }, [user]);

    const handleUsernameChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(e.target.value);
        setUsernameError("");
    };

    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);
    }

    const handleEmailChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
        setEmailError("");
    };

    const handlePassChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value);
        setPassError(""); 
    };

    const handleNewPassChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setNewPass(e.target.value);
        setNewPassError(""); 
    };

    const handleRepeatPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPass(e.target.value);
    };

    const handleSubmit = () => {
        
        let isValid = true;

        // Verificar nuevo nombre
        const isExistingUsername = existingUsernames.some(username => username.toLowerCase() === newUsername.toLowerCase());
        if (newUsername !== userData.username && newUsername !== "" &&  !isExistingUsername)  {
            setUserData((prevUserData) => ({
                ...prevUserData,
                username: newUsername
            }));
        } else if (isExistingUsername) {
            setUsernameError("El nuevo nombre de usuario ya existe.");
            isValid = false;
        } else {
            setUserData((prevUserData) => ({
                ...prevUserData,
                username: prevUserData.username
            }));
        }

        // Verificar nuevo correo
        const isExistingEmail = existingEmails.includes(newEmail);
        if (newEmail !== userData.email && newEmail !== ""  && !isExistingEmail ) {
            if(!validateEmail(newEmail)){
                setEmailError("Debe de ingresar un email válido");
                isValid = false;
            } else {
                setUserData((prevUserData) => ({
                    ...prevUserData,
                    email: newEmail
                }));
            }  
        } else if (isExistingEmail) {
            setEmailError("El nuevo correo electrónico ya existe.");
            isValid = false;
        } else {
            setUserData((prevUserData) => ({
                ...prevUserData,
                email: prevUserData.email
            }));
        }

        //Verificar nueva contraseña
        if(pass !== userData.password ){
            setPassError("Contraseña incorrecta") 
            isValid = false;           
        } 
        
        if (pass == "") {
            setPassError("Debe validar primero la contraseña actual")
            isValid = false;
        } else {
            if (newPass !== userData.password && newPass !== "") {
                if (!validatePassword(newPass)) {
                    setNewPassError('La contraseña debe contener al menos 8 caracteres (letras y números)');
                    isValid = false;
                } else {
                    setUserData((prevUserData) => ({
                        ...prevUserData,
                        password: newPass
                    }));
                } 
                
            } else if (newPass == userData.password) {
                setNewPassError("La nueva contraseña debe ser diferente a la actual.");
                isValid = false;
            } else {
                setUserData((prevUserData) => ({
                    ...prevUserData,
                    password: prevUserData.password
                }));
            }

            if (newPass !== repeatPass)  {
                setNewPassError("La nueva contraseña y la repetición no coinciden.");
                isValid = false;
                return; 
            }
        }
        
        // Validar
        if(isValid){
            setSaveStatus("¡Guardado!");
            setNewUsername("");
            setNewEmail("");
            setPass("");
            setNewPass("");
            setRepeatPass("");
        }
    };

    return (
        <div className="h-screen flex justify-center">
            <div className="flex flex-col justify-around w-full max-w-3xl px-4">
                <div className="flex justify-center items-center flex-col md:flex-row md:justify-between">
                    <div className="flex justify-center items-center md:mb-0 mb-4">
                        <Image src={user_img} alt="Imagen de perfil" width={100} height={100} className="rounded-full" />
                        <div className="text-black text-center ml-4">
                            <p className="text-lg font-bold">{userData.email}</p>
                            <p className="text-gray-600">@{userData.username}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5 md:mb-0 mb-4">
                        <ButtonCustom>
                            <span className="text-sm font-semibold leading-7">Cambiar foto</span>
                        </ButtonCustom>
                    </div>
                </div>

            <div className="flex justify-center md:justify-between text-black flex-col md:flex-row mb-5 md:mb-0">
                <div className="w-full md:w-1/2 md:mr-4">
                    <div className="mb-4"> 
                        <InputForm
                            label="Nombre de usuario"
                            name="user"
                            placeholder="Introduzca nuevo nombre de usuario"
                            type="text"
                            value={newUsername}
                            onChange={handleUsernameChange}
                        />
                        {usernameError && <span className="text-red-500">{usernameError}</span>}
                    </div>
                    <div className="mb-4"> 
                        <InputForm
                            label="Correo electrónico"
                            name="email"
                            placeholder="Introduzca su correo electrónico"
                            type="email"
                            value={newEmail}
                            onChange={handleEmailChange}
                        />
                        {emailError && <span className="text-red-500">{emailError}</span>}
                    </div>
                    <div className="mb-4"> 
                        <InputForm
                            label="Nueva contraseña"
                            name="newPassword"
                            placeholder="Introduzca su nueva contraseña"
                            type="password"
                            value={newPass}
                            onChange={handleNewPassChange}
                        />
                        {newPassError && <span className="text-red-500">{newPassError}</span>}
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <div className="mb-4"> 
                        <InputForm
                            label="Nombre completo"
                            name="fullName"
                            placeholder={userData.fullname}
                            type="text"
                            value={fullName}
                            onChange={handleFullNameChange}
                        />
                    </div>
                    <div className="mb-4"> 
                        <InputForm
                            label="Contraseña Actual"
                            name="actualPassword"
                            placeholder="Introduzca su actual contraseña"
                            type="password"
                            value={pass}
                            onChange={handlePassChange}
                        />
                        {passError && <span className="text-red-500">{passError}</span>}
                    </div>
                    <div className="mb-4"> 
                        <InputForm
                            label="Repita su nueva contraseña"
                            name="rePassword"
                            placeholder="Introduzca de nuevo su nueva contraseña"
                            type="password"
                            value={repeatPass}
                            onChange={handleRepeatPassChange}
                        />
                    </div>
                </div>
                
                
            </div>

                <div className="flex flex-col items-center">
                    {saveStatus && <span className="text-blue-500">{saveStatus}</span>}
                    <div className="flex justify-center mt-4">
                        <ButtonCustom onClick={handleSubmit}>
                            <span className="text-sm font-semibol leading-7">Guardar Cambios</span>
                        </ButtonCustom>
                    </div>
                </div>
            </div>
        </div>
    );
    
}
