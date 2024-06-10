'use client'
import React, { useState, useContext } from "react";
        
        
import Image from "next/image";
import user_img from "@/public/user_img.svg";
import InputForm from "@/app/components/Settings/InputFormSettings";
import ButtonCustom from "@/app/components/Settings/ButtonCustomSettings";

import { updateUser } from "@/app/lib/data";
import { UserContext } from "@/app/context/UserContext";
import { validateEmail } from "@/app/utils/validateEmail";
import { validatePassword } from "@/app/utils/validatePassword";

export default function Settings() {
  
  const { usuario, setUsuario } = useContext(UserContext);
  const [saveStatus, setSaveStatus] = useState("");

  const [newUsername, setNewUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [newFullname, setNewFullname] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [actualPass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [passError, setPassError] = useState(""); 
  const [newPassError, setNewPassError] = useState("");
  const [repeatPassError, setRepeatPassError] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUsername(e.target.value);
    setUsernameError("");
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFullname(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(e.target.value);
    setEmailError("");
  };

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    setPassError("");
  };

  const handleNewPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPass(e.target.value);
    setNewPassError("");
  };

  const handleRepeatPassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPass(e.target.value);
    setRepeatPassError("");
  };

  const handleSubmit = async () => {
    let isValid = true;

    if (usuario !== null) {
      
      // Verificar nuevo nombre
      if (newUsername !== "") {
        if (newUsername.toUpperCase() !== usuario?.username.toUpperCase()) {
          usuario.username = newUsername;
          console.log(usuario.username)
        } else{
          isValid = false;
          setUsernameError("El nombre de usuario introducido ya existe");  
        }
      }
      
      // Verificar nuevo correo
      if (newEmail !== "") {
        if(newEmail !== usuario?.email ){
          if (!validateEmail(newEmail)) {
            setEmailError("Debe de ingresar un email válido");
          } else {
            usuario.email = newEmail;
          console.log(usuario.email)
          }
        } else{
          isValid = false;
          setEmailError("El email introducido ya existe")  
        }
      }

      // Verificar nueva contraseña
      if (newPass !== "") {
        if (newPass !== actualPass) {
          if (!validatePassword(newPass)) {
            isValid = false;
            setNewPassError('La contraseña debe contener al menos 8 caracteres (letras y números)');
          } else {
            if (newPass !== repeatPass) {
              isValid = false;
              setNewPassError("La nueva contraseña y la repetición no coinciden.");
              console.log(newPass);
              console.log(repeatPass);
            } else {
              if (actualPass== "") {
                isValid = false;
                setPassError("Debe introducir la contraseña actual");
              } else {
                usuario.password = actualPass;
                usuario.newpassword = newPass;
                console.log("Nueva contraseña: " + newPass);
                console.log("Contraseña actual: " + usuario.password);
                console.log("Nueva contraseña back: " + usuario.newpassword); 
              }
              
            }
          }
        } else {
          setNewPassError('La nueva contraseña debe ser diferente a la actual');
        }
      }
      
      //Verificar nombre completo
      if (newFullname !== ""){
        usuario.fullname = newFullname
      }

      updateUser(usuario.id, usuario.username, usuario.fullname, usuario.email, usuario.password, usuario.newpassword)
      setSaveStatus("¡Guardado!");

    }

    if (!isValid) {
      setSaveStatus("Error al guardar datos"); 
    }

  };

  return (
    <div className="h-screen flex justify-center">
      <div className="flex flex-col justify-around w-full max-w-3xl px-4">
        <div className="flex justify-center items-center flex-col md:flex-row md:justify-between">
          <div className="flex justify-center items-center md:mb-0 mb-4">
            <Image src={user_img} alt="Imagen de perfil" width={100} height={100} className="rounded-full" />
            <div className="text-black text-center ml-4">
              <p className="text-lg font-bold">{usuario?.email}</p>
              <p className="text-gray-600">@{usuario?.username}</p>
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
                label="Nombre completo: "
                name="newFullname"
                placeholder={usuario ? usuario?.fullname : ""}
                type="text"
                value={newFullname}
                onChange={handleFullNameChange}
              />
            </div>
            <div className="mb-4">
              <InputForm
                label="Contraseña Actual"
                name="actualPassword"
                placeholder="Introduzca su actual contraseña"
                type="password"
                value={actualPass}
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
              {repeatPassError && <span className="text-red-500">{repeatPassError}</span>}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {saveStatus && <span className="text-blue-500">{saveStatus}</span>}
          <div className="flex justify-center mt-4">
            <ButtonCustom onClick={handleSubmit}>
              <span className="text-sm font-semibold leading-7">Guardar Cambios</span>
            </ButtonCustom>
          </div>
        </div>
      </div>
    </div>
  );
}
