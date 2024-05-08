'use client'
// Imports
import { useState } from "react";
import { useRouter } from "next/navigation";


import ErrorModal from "../Login/ErrorModal";
import ButtonCustom from "../Login/ButtonCustom";
import InputForm from "../Login/InputForm";
import { validatePassword } from "@/app/utils/validatePassword";
import useComprobateKey from "@/app/hook/ComprobateKey";
import { enviarKeyMail } from "@/app/lib/data";

export default function ResetPassword() {
    const router = useRouter()
    const [errors, setErrors] = useState(false);
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [email,setEmail]= useState('')
    const [errorMessage, setErrorMessage] = useState("");
    const {key,load}= useComprobateKey()

  
    const handlePassChange = (e: any) => {
        setPassword1(e.target.value)
    }

    const handlePass2Change = (e: any) => {
        setPassword2(e.target.value)
    }
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password1 !== password2) {
            setErrorMessage("Las contraseñas no coinciden");
            setErrors(true);
            return;
        } else if (!validatePassword(password1)) {
            setErrorMessage('La contraseña debe contener al menos 8 caracteres (letras y números)');
            setPassword1('');
            setPassword2('');
        } else {
            setErrorMessage('');
            router.push('../login')
        }
    };
    const handleEmailSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(email=='') {
            setErrorMessage('El email no puede estar vacio')
            setErrors(true)
            return
        }
        //Enviar mail
        const res= await enviarKeyMail(email)
        if(res){
            setErrorMessage('Email enviado')
            setErrors(true)
            router.push('../login')
        }else{
            setErrorMessage('Email no enviado')
            setErrors(true)
        }
    }
    


    return (
        <>
            <div className="md:w-4/6 max-w-4xl lg:w-1/2 flex flex-col gap-3 items-center bg-black bg-opacity-50 md:bg-transparent rounded-xl md:rounded-none px-4 py-3 lg:py-6">
                <h2 className="mt-2 md:mt-5 text-center text-3xl tracking-wider font-bold leading-9 text-white">
                    Nueva contraseña
                </h2>
                {load && key ? (<div className="mt-3 md:mt-4 w-9/12 max-w-md">
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
                        <div className="mt-20">
                            <ButtonCustom>
                                Cambiar contraseña
                            </ButtonCustom>
                        </div>
                    </form>
                </div>) : (
                    <div className="mt-3 md:mt-4 w-9/12 max-w-md">
                        {errors ? <ErrorModal message={errorMessage} /> : ''}
                        <form className="space-y-5" method="POST" onSubmit={handleEmailSubmit}>
                            {/* --- NUEVA CONTRASEÑA ---- */}
                            <InputForm
                                onChange={(value)=> setEmail(value.target.value)}
                                label="Introduzca su email"
                                name="email"
                                placeholder='correo@correo.es'
                                type='email'
                                key={'password1'}
                            />
                            {/* --- BTN ENVIAR MAIL ---- */}
                            <div className="mt-20">
                                <ButtonCustom>
                                    Enviar Mail
                                </ButtonCustom>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    )
}

//