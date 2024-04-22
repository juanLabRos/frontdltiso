'use client'
// Imports
import { useState } from "react";
import { useRouter } from "next/navigation";


import ErrorModal from "../Login/ErrorModal";
import ButtonCustom from "../Login/ButtonCustom";
import InputForm from "../Login/InputForm";

export default function ForgotPassword() {
    const router = useRouter()
    const [email, setEmail] = useState<string>("");
    const [errors, setErrors] = useState(false);
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email) {
        setErrors(true);
        return;
      }
      router.push("");
    };
  
    return (
      <>
        <div className="md:w-4/6 max-w-4xl lg:w-1/2 flex flex-col gap-3 items-center bg-black bg-opacity-50 md:bg-transparent rounded-xl md:rounded-none px-4 py-3 lg:py-6">
        <h2 className="mt-2 md:mt-5 text-center text-3xl tracking-wider font-bold leading-9 text-white">
          Recuperación de contraseña
        </h2>
        <h4 className='text-center text-white'>Introduzca un email válido de recuperación</h4>
        <div className="mt-3 md:mt-4 w-9/12 max-w-md">
          {errors && <ErrorModal message="Por favor, introduce tu correo electrónico." />}
          <form className="space-y-5" method="POST" onSubmit={handleSubmit}>
            <InputForm
              onChange={handleEmailChange}
              label="Introduzca su email"
              name="email"
              placeholder="email@domain.com"
              type="email"
              key="email"
            />
            <div>
              <ButtonCustom>Reset</ButtonCustom>
            </div>
          </form>
          </div>
        </div>
      </>
    );
  }