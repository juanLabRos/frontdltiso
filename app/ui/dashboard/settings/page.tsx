import Image from "next/image";
import Link from "next/link";


export default function Settings() {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className="container">
                {/* PERFIL */}
                <div className="grid grid-cols-2 gap-80">
                    <div className="flex justify-center items-center mb-8">
                        <div className="mr-4">
                            {/* Aquí debes reemplazar '/perfil.svg' con la ruta a la imagen del usuario */}
                            <Image src="/perfil.svg" alt="Imagen de perfil" width={100} height={100} className="rounded-full" />
                        </div>
                        <div>
                            {/* Correo electrónico */}
                            <p className="text-lg font-bold">email@dltcode.es</p>
                            {/* Nombre de usuario */}
                            <p className=" text-gray-600">@user123</p>
                        </div>
                    </div>
                    {/* Cambiar foto */}
                    <div className="flex justify-center items-center mb-8 gap-5">
                        <button 
                            type="submit" 
                            className="bg-customTeal-default hover:bg-customTeal-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Cambiar foto
                        </button>
                    </div>
                </div>


                {/* AJUSTES */}
                <div className="mt-8 grid grid-cols-2 gap-80">
                    {/* Lado izquierdo */}
                    <div>
                        {/* Usuario*/}
                        <div className="mb-4">
                            <label className="form-label"></label>
                            <input 
                                type="text" 
                                id="usuario" 
                                name="usuario" 
                                placeholder="Introduzca su nombre de usuario"
                                className="block w-full indent-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {/* Email*/}
                        <div className="mb-4">
                            <label className="form-label"></label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Introduzca su correo electrónico"
                                className="block w-full indent-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {/* Nueva contraseña */}
                        <div className="mb-4">
                            <label className="form-label"></label>
                            <input 
                                type="text" 
                                id="newpass" 
                                name="newpass" 
                                placeholder="Introduzca la nueva contraseña"
                                className="block w-full indent-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    
                    {/* Lado derecho */}
                    <div>
                        {/* Nombre*/}
                        <div className="mb-4">
                            <label className="form-label"></label>
                            <input 
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Introduzca su nombre completo"
                                className="block w-full indent-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {/* Contraseña actual */}
                        <div className="mb-4">
                            <label className="form-label"></label>
                            <input 
                                type="text" 
                                id="pass" 
                                name="pass" 
                                placeholder="Introduzca la contraseña actual"
                                className="block w-full indent-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        {/* Repetir nueva Contraseña */}
                        <div className="mb-4">
                            <label className="form-label"></label>
                            <input 
                                type="text" 
                                id="repass" 
                                name="repass" 
                                placeholder="Repita la nueva contraseña"
                                className="block w-full indent-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button 
                        type="submit" 
                        className="bg-customTeal-default hover:bg-customTeal-dark text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Guardar cambios
                    </button>
                </div>
            </div>
        </div>
    );
}
