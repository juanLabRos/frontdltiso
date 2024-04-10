import Image from 'next/image'
import NewAccount from '../components/Login/NewAccount'


export default function Register() {
  return (
    <>
      <div className='min-h-screen relative bg-white text-black'>
        {/* --- FONDO ---- */}
        <div className='bg-vector transform scale-x-[-1] absolute md:-left-80 bg-no-repeat bg-cover w-screen flex justify-center items-center'>
          {/* --- PROPIEDADES  ---- */}
          <div className=" flex items-center relative scale-x-[-1] md:-left-80 flex-col max-h-svh md:flex-row border h-screen justify-around border-transparent max-w-full text-white bg-transparent  w-11/12 md:w-5/6 lg:w-5/6 xl:w-11/12">
            {/* --- IMAGEN ---- */}
            <div className="md:justify-start w-3/4 md:w-1/3 lg:w-1/2 relative flex justify-center items-center ">
              <Image
                className=" mt-2  w-4/6 max-w-md  bg-customTeal-default rounded-2xl"
                src="/dltcode_logo_blanco.webp"
                alt="Your Company"
                width={500}
                height={200}
                quality={75}
              />
            </div>
              {/* --- INICIO DE SESION ---- */}
              <NewAccount/>
          </div>
        </div>
      </div>
      
    </>
  )
}
