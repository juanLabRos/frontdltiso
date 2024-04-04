import ButtonCustom from "./ButtonCustom";
import InputForm from "./InputForm";

export default function NewAccount(){
    return (
        <>
        <div className=" md:w-4/6 max-w-4xl lg:w-1/2 flex flex-col gap-3 items-center bg-black bg-opacity-50 md:bg-transparent rounded-xl md:rounded-none px-4 py-3 lg:py-6 ">
              <h2 className="mt-2 md:mt-6 text-center text-3xl tracking-wider font-bold leading-9 text-white">
                Registro
              </h2>
              <h4 className='text-center text-white'>Introduce tu email para registrarte en la página</h4>
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
                    Registrarse
                  </ButtonCustom>
                </div>
              </form>
            </div>
        </div>
            </>
    )
}