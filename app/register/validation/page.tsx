'use client'
import { activateAccount } from "@/app/api/auth/register/route"
import ButtonCustom from "@/app/components/Login/ButtonCustom"
import ErrorModal from "@/app/components/Login/ErrorModal"
import { UserContext } from "@/app/context/UserContext"
import { reSendEmail } from "@/app/lib/data"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FormEvent, useContext, useState } from "react"

export default function Validation(){
    const [error, setError] = useState('')
    const router= useRouter()
    const { usuario } = useContext(UserContext)
    console.log(usuario);
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const { validationNumber } = e.target as HTMLFormElement;

        try {
            if (usuario) {
                const act=await activateAccount({ activation_token: parseInt(validationNumber.value), email: usuario.email })
                if(act){
                    router.push('/login')
                }else{
                    setError('El código no es correcto')
                }
            }
        } catch (error: any) {
            setError(error.message)
        }

    }
    const handleNewSend = async () => {
        try {
            if (usuario) {
                const newSend=await reSendEmail({email:usuario.email})
                if(newSend)  setError('Se ha enviado un nuevo código')
            }
        } catch (error: any) {
            setError(error.message)
        }
    }
    return (
        <div className="text-black grid items-center h-screen">
            {/* Container  */}
            <div className="flex flex-col justify-evenly m-auto my-auto border shadow-xl rounded-lg h-5/6 w-5/6 items-center">
                {/* Image Box */}
                <div>
                    <Image
                        className="md:w-3/6  w-4/6 max-w-4xl mx-auto  bg-white rounded-2xl"
                        src="/dltcode_logo.webp"
                        alt="DLTCode"
                        priority={true}
                        width={500}
                        height={100}
                    />
                </div>
                <h2 className="text-3xl">Se ha enviado un código a su correo</h2>
                <h3 className="text-2xl">Introduzcalo en el siguiente recuadro</h3>
                {
                  error ? <ErrorModal message={error}/> : ''
                }
                <form action="#" className="flex items-center flex-col w-full h-2/5 justify-around" onSubmit={handleSubmit}>
                    <input className="border text-center font-bold text-xl tracking-widest w-2/4 h-14 border-gray-700 rounded-md " type="number" maxLength={6} minLength={6} required  name="validationNumber" id="validationNumber" />
                    <a className="w-2/4 text-customTeal-medium font-bold  underline" onClick={handleNewSend}>Volver a enviar</a>
                    <div className=" w-2/6 text-white font-bold py-2 px-4 ">
                        <ButtonCustom>Enviar</ButtonCustom>
                    </div>
                </form>
                
            </div>
        </div>
    )
}