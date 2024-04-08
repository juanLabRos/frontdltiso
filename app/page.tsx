import Image from 'next/image'
import Login from './ui/Login'

export default function index() {
  return (
    <>
      {/*
        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      {/* --- GENERAL ---- */}
      <div className='min-h-screen bg-white text-black'>
        {/* --- FONDO ---- */}
        <div className='bg-vector bg-no-repeat bg-cover w-screen h-screen flex justify-center items-center'>
          {/* --- PROPIEDADES  ---- */}
          <div className=" flex items-center flex-col md:flex-row justify-center max-w-full text-white bg-transparent  w-11/12 md:w-5/6 lg:w-5/6 xl:w-11/12">
            {/* --- IMAGEN ---- */}
            <div className="md:justify-start w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/2 relative flex justify-center items-center ">
              <Image
                className="md:w-3/6  w-4/6 max-w-4xl  bg-white rounded-2xl"
                src="/dltcode_logo.webp"
                alt="Your Company"
                priority={true}
                width={500}
                height={200}
              />
            </div>
              {/* --- INICIO DE SESION ---- */}
              <Login/>
          </div>
        </div>
      </div>
      
    </>
  )
}
