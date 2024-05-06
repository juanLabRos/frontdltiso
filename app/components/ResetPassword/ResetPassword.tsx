'use client'
// Imports
import { useState } from "react";
import { useRouter } from "next/navigation";


import ErrorModal from "../Login/ErrorModal";
import ButtonCustom from "../Login/ButtonCustom";
import InputForm from "../Login/InputForm";

export default function ResetPassword() {
    const router = useRouter()
    const [errors, setErrors] = useState(false);
    const [password1, setPassword1] = useState("123123");
    const [password2, setPassword2] = useState("123123");
    const [errorMessage, setErrorMessage] = useState("");

  
    const handlePassChange = (e: any) => {
        setPassword1(e.target.value)
    }

    const handlePass2Change = (e: any) => {
        setPassword2(e.target.value)
    }
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const uppercaseRegex = /[A-Z]/; // Expresión regular para verificar mayúsculas
        const lowercaseRegex = /[a-z]/; // Expresión regular para verificar minúsculas
        const numberRegex = /[0-9]/; // Expresión regular para verificar números


        if (password1 !== password2) {
            setErrorMessage("Las contraseñas no coinciden");
            setErrors(true);
            return;
        } else if (password1.length < 8 || !uppercaseRegex.test(password1) || !lowercaseRegex.test(password1) || !numberRegex.test(password1)) {
            setErrorMessage("La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.");
            setErrors(true);
            setPassword1('');
            setPassword2('');
            return;
        } else {
            // Si las contraseñas coinciden y tienen al menos 8 caracteres, redirige al usuario
            router.push("../login");
        }
    };
    


    return (
        <>
            <div className="md:w-4/6 max-w-4xl lg:w-1/2 flex flex-col gap-3 items-center bg-black bg-opacity-50 md:bg-transparent rounded-xl md:rounded-none px-4 py-3 lg:py-6">
                <h2 className="mt-2 md:mt-5 text-center text-3xl tracking-wider font-bold leading-9 text-white">
                    Nueva contraseña
                </h2>
                <div className="mt-3 md:mt-4 w-9/12 max-w-md">
                    {errors ? <ErrorModal message={errorMessage} /> : ''}
                    {/* --- FORMULARIO ---- */}
                    <form className="space-y-5" method="POST" onSubmit={handleSubmit}>
                        {/* --- NUEVA CONTRASEÑA ---- */}
                        <InputForm
                            onChange={handlePassChange}
                            label="Introduzca su nueva contraseña"
                            name="password1"
                            placeholder='*******'
                            type='password'
                            key={'password1'}
                        />
                        {/* --- CONFIRMAR CONTRASEÑA ---- */}
                        <InputForm
                            onChange={handlePass2Change}
                            label="Confirmar contraseña"
                            name="password2"
                            placeholder='*******'
                            type='password'
                            key={'password2'}
                        />
                        {/* --- BTN CAMBIAR CONTRASEÑA ---- */}
                        <div style={{ marginBottom: '5rem' }}></div>
                        <div className="mt-1">
                            <ButtonCustom>
                                Cambiar contraseña
                            </ButtonCustom>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

//