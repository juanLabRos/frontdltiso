import ButtonCustom from "./ButtonCustom";
import InputForm from "./InputForm";

export default function NewAccount(){
    return (
        <>
        <div className=" max-w-2xl -translate-y-4 md:translate-y-0  lg:w-3/6 h-full lg:h-5/6 flex items-center gap-3 ">
             <div className="flex flex-col items-center  bg-gray-300 bg-opacity-80  rounded-xl h-fit lg:px-28 md:py-3 lg:pt-8">
              <h2 className="mt-3 lg:my-6 text-center text-3xl tracking-wider font-bold leading-9 text-customTeal-default ">
                  Registro
                </h2>
                <h4 className='text-center text-customTeal-default'>Introduce tu email para registrarte en la página</h4>
                <div className="mt-3  md:mt-5 w-10/12 max-w-md  h-2/3">
                  {/* --- FORMULARIO ---- */}
                <form className="flex flex-col min-w-40 justify-around  h-full text-black" action="#" method="POST">
                    <InputForm label='Nombre de Usuarios' plcolor="text-customTeal-dark" name='text' placeholder='Introduzca su nombre de usuario' type='text' key={'username'}/>
                    {/* --- EMAIL ---- */}
                    <InputForm label='Correo Electrónico' plcolor="text-customTeal-dark" name='email' placeholder='Introduzca su correo electronico' type='email' key={'email'}/>
                      {/* --- CONTRASEÑA ---- */}
                    <InputForm label='Contraseña' name='password' plcolor="text-customTeal-dark" placeholder='*******' type='password' key={'pasword'}/>
                    <InputForm label='Repita su contraseña' plcolor="text-customTeal-dark" name='rePasword' placeholder='*******' type='password' key={'rePassword'}/>
                    <InputForm label='Empresa' plcolor="text-customTeal-dark" name='businness' placeholder='Introduza el nombre de su empresa' type='text' key={'businness'}/>
                    {/* --- BTN SESION ---- */}
                  <div className="my-6">
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