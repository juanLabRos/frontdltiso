'use client'
import {FormEvent, useContext, useState} from 'react'
import Link from "next/link";
import ButtonCustom from "./ButtonCustom";
import InputForm from "./InputForm";
import { fetchCheckMail } from '@/app/lib/data';
import { useDebouncedCallback } from 'use-debounce';
import { register } from '@/app/api/auth/register/route';
import { User } from '@/app/lib/definitions';
import ErrorModal from './ErrorModal';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/app/context/UserContext';

export default function NewAccount(){
    const router= useRouter()
    const { setUsuario} = useContext(UserContext)
    const[mailError,setMailError]= useState('')
    const [error,setError]= useState(null)
    const [passwordError,setPasswordError]= useState('')

    //Chech Email
    const handleMail=useDebouncedCallback(async (e:any)=>{
      e.target.value==''? setMailError('El correo no puede estar vacio'): ''
      const user = await fetchCheckMail({mail:e.target.value})
      if(user==null){
        setMailError('El correo ya esta registrado')
      }else{
        setMailError('')
      }
    },200)

    const handleInputForm=useDebouncedCallback((e:any)=>{
      const { password, rePasword } = e.target.form as HTMLFormElement;
      if(password.value !== rePasword.value){
        setPasswordError('Las contraseñas no coinciden')
      }else{
        setPasswordError('')
      }
    },200)
    //Send Register
    const handleSubmit=async(e: FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      if(mailError!='' || passwordError!='') return 
      const { nombre, email, password, compania } = e.target as HTMLFormElement;

      const variables: Partial<User> ={
        username: nombre.value,
        email: email.value,
        password: password.value,
        company: compania.value
      }
      try {
        const res=await register({ data: variables as User })
        if(res) {
          setUsuario(res.user)
          router.push('/register/validation')
        }
        } catch (error:any) {
          setError(error.message)
        }
      
    }

    return (
        <>
        <div className="max-w-2xl top-0 transform scale-90 -translate-y-4 md:translate-y-0  lg:w-3/6 h-full lg:h-5/6 flex items-center gap-3">
             <div className="flex flex-col items-center rounded-xl h-fit lg:px-28 md:py-3 lg:pt-8">
                <h2 className="mt-3 lg:my-6 text-center text-3xl tracking-wider font-bold leading-9 text-customTeal-default ">
                  Registro
                </h2>
                {
                  error ? <ErrorModal message={error}/> : ''
                }
                <div className="">
                  {/* --- FORMULARIO ---- */}
                <form className="flex flex-col min-w-40 justify-around  h-full text-black" onSubmit={handleSubmit} method="POST">
                    <InputForm label='Nombre de Usuario' plcolor="text-customTeal-dark" name='nombre' placeholder='Introduzca su nombre de usuario' type='text' key={'username'}/>
                    {/* --- EMAIL ---- */}
                    {
                      mailError != '' ? <p className="text-red-500 text-xs text-center">{mailError}</p> : ''
                    }
                    <InputForm label='Correo Electrónico' onBlur={handleMail} plcolor="text-customTeal-dark" name='email' placeholder='Introduzca su correo electronico' type='email' key={'email'}/>
                      {/* --- CONTRASEÑA ---- */}
                    {
                      passwordError && <p className="text-red-500 text-xs text-center">{passwordError}</p>
                    }
                    <InputForm label='Contraseña' name='password' plcolor="text-customTeal-dark" placeholder='*******' type='password' key={'pasword'}/>
                    <InputForm onBlur={handleInputForm} label='Repita su contraseña' plcolor="text-customTeal-dark" name='rePasword' placeholder='*******' type='password' key={'rePassword'}/>
                    <InputForm label='Empresa' plcolor="text-customTeal-dark" name='compania' placeholder='Introduza el nombre de su empresa' type='text' key={'businness'}/>
                    {/* --- BTN SESION ---- */}
                    <span className="hidden md:block mt-3 text-sm text-white text-center md:text-gray-700">Si ya estas Registrado. <Link className='text-customTeal-dark font-bold ' href={'/'}> Iniciar Sesión</Link></span>
                  <div className="my-3">
                      <ButtonCustom>
                        <span className="text-white">Registrarse</span>
                      </ButtonCustom>
                  </div>
                  <div>
                    <p className="md:text-gray-500  mb-3 text-center text-xs">Al registarse acepta los <span className="text-customTeal-dark">Terminos de Servicio</span> y <span  className="text-customTeal-dark">Politica de Privacidad</span></p>
                  </div>
                </form>
              </div> 
            </div>
        </div>
      </>
    )
}