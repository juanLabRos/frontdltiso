// Imports
'use client'
import { Suspense, useState } from "react";
import { useRouter } from "next/navigation";

import ErrorModal from "../Login/ErrorModal";
import ButtonCustom from "../Login/ButtonCustom";
import InputForm from "../Login/InputForm";
import { validatePassword } from "@/app/utils/validatePassword";
import useComprobateKey from "@/app/hook/ComprobateKey";
import { enviarKeyMail } from "@/app/lib/data";
import SkeletonInputButton from "../skeleton/InputSkeleton";

export default function ResetPassword() {
  const router = useRouter();
  const [errors, setErrors] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { key, load } = useComprobateKey();

  const handlePassChange = (e:any) => {
    setPassword1(e.target.value);
  };

  const handlePass2Change = (e:any) => {
    setPassword2(e.target.value);
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password1 !== password2) {
      setErrorMessage("Las contraseñas no coinciden");
      setErrors(true);
      return;
    }

    if (!validatePassword(password1)) {
      setErrorMessage("La contraseña debe contener al menos 8 caracteres (letras y números)");
      setErrors(true);
      setPassword1("");
      setPassword2("");
      return;
    }

    setErrors(false);
    router.push("../login");
  };

  const handleEmailSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("El email no puede estar vacío");
      setErrors(true);
      return;
    }

    // Enviar correo con la clave
    const res = await enviarKeyMail(email);

    if (res) {
      setErrorMessage("Email enviado con éxito");
      setErrors(true);
      router.push("../login");
    } else {
      setErrorMessage("Error al enviar el email");
      setErrors(true);
    }
  };

  return (
    <div className="md:w-4/6 max-w-4xl lg:w-1/2 flex flex-col gap-3 items-center bg-black bg-opacity-50 md:bg-transparent rounded-xl md:rounded-none px-4 py-3 lg:py-6">
      <h2 className="mt-2 md:mt-5 text-center text-3xl tracking-wider font-bold leading-9 text-white">
        Nueva contraseña
      </h2>

      {load ?
        (  key ? (
          <div className="mt-3 md:mt-4 w-9/12 max-w-md">
            {errors && <ErrorModal message={errorMessage} />}
            <form className="space-y-5" onSubmit={handleSubmit}>
              <InputForm
                name="password"
                onChange={handlePassChange}
                label="Introduzca su nueva contraseña"
                placeholder="*******"
                type="password"
              />
              <InputForm
                name="rePassword"
                onChange={handlePass2Change}
                label="Confirmar contraseña"
                placeholder="*******"
                type="password"
              />
              <div className="mt-20">
                <ButtonCustom>
                  Cambiar contraseña
                </ButtonCustom>
              </div>
            </form>
          </div>
        ) : (
          <div className="mt-3 md:mt-4 w-9/12 max-w-md">
            {errors && <ErrorModal message={errorMessage} />}
            <form className="space-y-5" onSubmit={handleEmailSubmit}>
              <InputForm
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                label="Introduce tu correo electrónico"
                placeholder="correo@correo.es"
                type="email"
              />
              <div className="mt-20">
                <ButtonCustom>
                  Enviar Email
                </ButtonCustom>
              </div>
            </form>
          </div>
        )): <SkeletonInputButton />}
    </div>
  );
}
 