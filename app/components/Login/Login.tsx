'use client'
//Imports
import { useContext, useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";

//Components
import ErrorModal from "./ErrorModal";
import ButtonCustom from "./ButtonCustom";
import InputForm from "./InputForm";
import Image from 'next/image'
import Link from "next/link";
import {GoogleSignInButton} from "./AuthButtons"
import { GithubSignInButton } from "./AuthButtons";
import { UserContext } from "@/app/context/UserContext";


export default function Login(){
  const router= useRouter()
  const {setUsuario} = useContext(UserContext)
  const [errors, setErrors] = useState(false);
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");

  const handleMailChange=(e:any)=>{
    setEmail(e.target.value)
    
  }
  const handlePassChange=(e:any)=>{
    setPassword(e.target.value)
  }
  const handleSubmit=async(e:any)=>{
    e.preventDefault()

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    
    if (responseNextAuth?.error) {
      if(responseNextAuth.error==="Account not activated"){
        setUsuario({ email }); 
        router.push('/register/validation')
      } 
      setErrors(true)
      return;
    }
    router.push("/dashboard");

  }
  const handleGitHub=async()=>{
    const responseNextAuth = await signIn("github", {
      redirect:true,
    });
    if (responseNextAuth?.error) {
      setErrors(true)
      return
    }
  }


    return (
      <>
        <div className=" md:w-4/6 max-w-4xl lg:w-1/2 flex flex-col gap-3 items-center bg-black bg-opacity-50 md:bg-transparent rounded-xl md:rounded-none px-4 py-3 lg:py-6 ">
              <h2 className="mt-2 md:mt-5 text-center text-3xl tracking-wider font-bold leading-9 text-white">
                Inicio Sesión
              </h2>
              <h4 className='text-center text-white'>Introduce tu email para iniciar sesión en la página</h4>
              <div className="mt-3 md:mt-4 w-9/12 max-w-md">
              {errors ? <ErrorModal message="El e-mail o la contraseña no coinciden"/> : ''}
                {/* --- FORMULARIO ---- */}
              <form className="space-y-5" method="POST" onSubmit={handleSubmit} >
                  {/* --- EMAIL ---- */}
                  <InputForm onChange={handleMailChange} label='Correo Electrónico' name='email' placeholder='Introduzca su correo electronico' type='email' key={'email'}/>
                    {/* --- CONTRASEÑA ---- */}
                  <InputForm onChange={handlePassChange} label='Contraseña' name='password' placeholder='*******' type='password' key={'pasword'}/>
                {/* --- RECUEDAME ---- */}
                <div className="flex items-center justify-between">
                  <div className="flex ml-3 items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-1/2 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600"
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-white">
                      Recuerdame
                    </label>
                  </div>
                    {/* --- FORGOTTEN PASSWORD ---- */}
                  <div className="text-sm leading-6 flex justify-end">
                    <Link href="../forgotPassword" className= "underline font-semibold text-right hover:text-customTeal-semidark">
                      ¿Olvidaste la contraseña?
                    </Link>
                  </div>
                </div>
                  {/* --- BTN SESION ---- */}
                <div>
                    <ButtonCustom>
                      Iniciar sesión
                    </ButtonCustom>
                  
                </div>
                {/* --- BTN REGISTRARSE ---- */}
              </form>
                <div className="mt-1">
                  <Link href={'../register'}>
                    <ButtonCustom>
                      Registrarse
                    </ButtonCustom>
                  </Link>
                </div>
            </div>

            {/* --- AUTENTICACIÓNES ---- */}
            <div className="mt-1 md:mt-4 w-full md:w-9/12">
              {/* --- CONTINUAR ---- */}
              <div className="flex justify-between">
                <div className="w-1/3 border-t border-gray-200 mt-3" aria-hidden="true">
                </div>
                <div className=" flex justify-center text-sm font-medium leading-6">
                  <span className=" font-semibold  text-center"> O continua con</span>
                </div>
                <div className="w-1/3 border-t border-gray-200 mt-3 " aria-hidden="true">
                </div>
              </div>
              {/* --- BOTONES ---- */}
              <div className="mt-1 flex 2xl:flex-col gap-4 flex-row">
                  {/* --- GOOGLE  ---- */}
                    <GoogleSignInButton>
                    </GoogleSignInButton>
                  {/* --- GITHUB ---- */}
                    <GithubSignInButton>
                    </GithubSignInButton>
                </div>
            </div>
          </div>
      </>
    )
}