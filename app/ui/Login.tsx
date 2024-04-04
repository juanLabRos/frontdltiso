import ButtonCustom from "./ButtonCustom";
import InputForm from "./InputForm";
import Image from 'next/image'

export default function Login(){
    return (
        <div className=" md:w-4/6 max-w-4xl lg:w-1/2 flex flex-col gap-3 items-center bg-black bg-opacity-50 md:bg-transparent rounded-xl md:rounded-none px-4 py-3 lg:py-6 ">
              <h2 className="mt-2 md:mt-6 text-center text-3xl tracking-wider font-bold leading-9 text-white">
                Inicio Sesión
              </h2>
              <h4 className='text-center text-white'>Introduce tu email para iniciar sesión en la página</h4>
              <div className="mt-3 md:mt-6 w-10/12 max-w-md">
                {/* --- FORMULARIO ---- */}
              <form className="space-y-6" action="#" method="POST">
                  {/* --- EMAIL ---- */}
                  <InputForm label='Correo Electrónico' name='email' placeholder='Introduzca su correo electronico' type='email' key={'email'}/>
                    {/* --- CONTRASEÑA ---- */}
                  <InputForm label='Contraseña' name='password' placeholder='*******' type='password' key={'pasword'}/>
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
                    <a href="#" className= "underline font-semibold text-right hover:text-customTeal-semidark">
                      ¿Olvidaste la contraseña?
                    </a>
                  </div>
                </div>
                  {/* --- BTN SESION ---- */}
                <div>
                  <ButtonCustom>
                    Iniciar sesión
                  </ButtonCustom>
                </div>
              </form>
            </div>

            {/* --- AUTENTICACIÓNES ---- */}
            <div className="mt-2 md:mt-6 w-full md:w-9/12">
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
              <div className="mt-2 flex 2xl:flex-col gap-4 flex-row">
                  {/* --- GOOGLE  ---- */}
                  <ButtonCustom color="gray" tono={200} textColor="black">
                    <Image src="./google.svg" width={20} height={20} alt="Google" className="w-5 mr-2 h-5"/>
                    <span className="text-sm font-semibold leading-7">Google</span>
                  </ButtonCustom>
                  {/* --- GITHUB ---- */}
                  <ButtonCustom color="gray" tono={200} textColor="black">
                        <Image src="./github.svg" width={20} height={20} alt="Google" className="w-5 mr-2 h-5"/>
                        <span className="text-sm font-semibold leading-7">GitHub</span>
                </ButtonCustom>
                </div>
            </div>
          </div>
    )
}