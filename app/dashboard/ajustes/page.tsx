import InputForm from "@/app/components/Login/InputForm";
import Image from "next/image";
import Link from "next/link";
import user_img from "@/public/user_img.svg";
import ButtonCustom from "@/app/ui/ButtonCustom";

export default function Settings() {
    return (
        <div className="h-screen flex justify-center">
            <div className=" flex md:-mt-8 flex-col h-5/6 md:scale-90 justify-around w-3/4 max-w-5xl">
                {/* PERFIL */}
                <div className="flex justify-around">
                    <div className="flex justify-around items-center w-2/6">
                        {/* Aquí debes reemplazar '/perfil.svg' con la ruta a la imagen del usuario */}
                        <Image src={user_img} alt="Imagen de perfil" width={100} height={100} className="rounded-full" />
                        <div className="text-black text-center">
                            {/* Correo electrónico */}
                            <p className="text-lg font-bold">email@dltcode.es</p>
                            {/* Nombre de usuario */}
                            <p className=" text-gray-600">@user123</p>
                        </div>
                    </div>
                    {/* Cambiar foto */}
                    <div className="flex justify-center items-center mb-8 gap-5">
                        <ButtonCustom>
                            <span className="text-sm font-semibol leading-7">Cambiar foto</span>
                        </ButtonCustom>
                    </div>
                </div>
                {/* ENTRADA DE DATOS */}
                <div className="flex justify-around text-black">
                    {/* Lado izquierdo */}
                    <div className="w-1/3">
                        {/* Usuario*/}
                        <InputForm label="Nombre de usuario" name="user" placeholder="Introduzca su nombre de usuario" type="text"></InputForm>
                        {/* Email*/}
                        <InputForm label="Correo electronico" name="email" placeholder="Introduzca su correo electronico" type="email"></InputForm>
                        {/* Nueva contraseña */}
                        <InputForm label="Nueva contraseña" name="newPassword" placeholder="Introduzca su nueva contraseña" type="password"></InputForm>
                    </div>
                    {/* Lado derecho */}
                    <div className="w-1/3">
                        {/* Nombre*/}
                        <InputForm label="Nombre completo" name="fullName" placeholder="Introduzca su nombre completo" type="text"></InputForm>
                        {/* Contraseña actual */}
                        <InputForm label="Contraseña Actual" name="actualPassword" placeholder="Introduzca su actual contraseña" type="password"></InputForm>
                        {/* Repetir nueva Contraseña */}
                        <InputForm label="Repita su nueva contraseña" name="user" placeholder="Introduzca de nuevo su nueva contraseña" type="password"></InputForm>
                    </div>
                </div>
                {/* Change Button */}
                <div className="flex justify-center">
                    <ButtonCustom>
                        <span className="text-sm font-semibol leading-7">Guardar Cambios</span>
                    </ButtonCustom>
                </div>
            </div>
        </div>
    );
}