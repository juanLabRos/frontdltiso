'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import user_img from "@/public/user_img.svg";

import InputForm from "@/app/components/Ajustes/InputFormAjustes";
import ButtonCustom from "@/app/components/Ajustes/ButtonCustomAjustes";
import Users from "./testUsers.json";

export default function Settings() {

    const [userData, setUserData] = useState(
        {
            id: 2,
            nombre: "",
            contrasenia: "",
            correo: "",
            nombre_completo: "",
            tipo_usuario: "",
            compania: ""
        }
    );

    //userName
    const [newUsername, setNewUsername] = useState("");
    const [existingUsernames, setExistingUsernames] = useState<string[]>([]);
    const [usernameError, setUsernameError] = useState(""); // Estado para mensaje de error de nombre de usuario
    //email
    const [newEmail, setNewEmail] = useState("");
    const [existingEmails, setExistingEmails] = useState<string[]>([]);
    const [emailError, setEmailError] = useState(""); // Estado para mensaje de error de correo electrónico
    //password
    const [newPass, setNewPass] = useState("");
    const [repeatPass, setRepeatPass] = useState("");
    const [passwordError, setPasswordError] = useState(""); // Estado para mensaje de error de contraseña

    const [saveStatus, setSaveStatus] = useState("");
    const user = Users.find((user) => user.id === userData.id);

    useEffect(() => {
        if (user) {
            setUserData(user);
        }
        const usernames: string[] = Users.map((user) => user.nombre);
        setExistingUsernames(usernames);
        const emails: string[] = Users.map((user) => user.correo);
        setExistingEmails(emails);
    }, [user]);

    const handleUsernameChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(e.target.value);
        setUsernameError("");
    };

    const handleEmailChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(e.target.value);
        setEmailError("");
    };

    const handlePassChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setNewPass(e.target.value);
        setPasswordError(""); 
    };

    const handleRepeatPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPass(e.target.value);
    };

    const handleSubmit = () => {
        
        let status = true;

        // Verificar nuevo nombre
        const isExistingUsername = existingUsernames.some(username => username.toLowerCase() === newUsername.toLowerCase());
        if (newUsername !== userData.nombre && newUsername !== "" &&  !isExistingUsername)  {
            setUserData((prevUserData) => ({
                ...prevUserData,
                nombre: newUsername
            }));
        } else if (isExistingUsername) {
            setUsernameError("El nuevo nombre de usuario ya existe.");
            status = false;
        } else {
            setUserData((prevUserData) => ({
                ...prevUserData,
                nombre: prevUserData.nombre
            }));
        }

        // Verificar nuevo correo
        const isExistingEmail = existingEmails.includes(newEmail);
        if (newEmail !== userData.correo && newEmail !== ""  && !isExistingEmail ) {
            setUserData((prevUserData) => ({
                ...prevUserData,
                correo: newEmail
            }));
        } else if (isExistingEmail) {
            setEmailError("El nuevo correo electrónico ya existe.");
            status = false;
        } else {
            setUserData((prevUserData) => ({
                ...prevUserData,
                correo: prevUserData.correo
            }));
        }
        
        // Verificar nueva contraseña
        if (newPass !== userData.contrasenia && newPass !== "") {
            setUserData((prevUserData) => ({
                ...prevUserData,
                contrasenia: newPass
            }));
        } else if (newPass == userData.contrasenia) {
            setPasswordError("La nueva contraseña debe ser diferente a la actual.");
            status = false;
        } else {
            setUserData((prevUserData) => ({
                ...prevUserData,
                contrasenia: prevUserData.contrasenia
            }));
        }

        if (newPass !== repeatPass)  {
            setPasswordError("La nueva contraseña y la repetición no coinciden.");
            status = false;
            return; 
        }

        // Validar
        if(status){
            setSaveStatus("¡Guardado!");
            setNewUsername("");
            setNewEmail("");
            setNewPass("");
            setRepeatPass("");
        }

    };

    return (
        <div className="h-screen flex justify-center">
            <div className="flex md:-mt-8 flex-col h-5/6 md:scale-90 justify-around w-3/4 max-w-5xl">
                <div className="flex justify-around">
                    <div className="flex justify-around items-center w-2/6">
                        <Image src={user_img} alt="Imagen de perfil" width={100} height={100} className="rounded-full" />
                        <div className="text-black text-center">
                            <p className="text-lg font-bold">{userData.correo}</p>
                            <p className="text-gray-600">@{userData.nombre}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-8 gap-5">
                        <ButtonCustom>
                            <span className="text-sm font-semibol leading-7">Cambiar foto</span>
                        </ButtonCustom>
                    </div>
                </div>
                <div className="flex justify-around text-black">
                    <div className="w-1/3">
                        <InputForm
                            label="Nombre de usuario"
                            name="user"
                            placeholder="Introduzca nuevo nombre de usuario"
                            type="text"
                            value={newUsername}
                            onChange={handleUsernameChange}
                        />
                        {usernameError && <span className="text-red-500">{usernameError}</span>}
                        <InputForm
                            label="Correo electronico"
                            name="email"
                            placeholder="Introduzca su correo electronico"
                            type="email"
                            value={newEmail}
                            onChange={handleEmailChange}
                        />
                        {emailError && <span className="text-red-500">{emailError}</span>}
                        <InputForm
                            label="Nueva contraseña"
                            name="newPassword"
                            placeholder="Introduzca su nueva contraseña"
                            type="password"
                            value={newPass}
                            onChange={handlePassChange}
                        />
                        {passwordError && <span className="text-red-500">{passwordError}</span>}
                    </div>
                    <div className="w-1/3">
                        <InputForm
                            label="Nombre completo"
                            name="fullName"
                            placeholder="Introduzca su nombre completo"
                            type="text"
                            value={userData.nombre_completo}
                        />
                        <InputForm
                            label="Contraseña Actual"
                            name="actualPassword"
                            placeholder="Introduzca su actual contraseña"
                            type="password"
                        />
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
