import Image from 'next/image'

export default function Register() {
  return (
    <>
      {/*
        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className='min-h-screen bg-white text-black'>
        <div className='bg-vector bg-no-repeat bg-cover w-screen h-screen flex justify-center items-center'>
          <div className=" flex items-center flex-col md:flex-row justify-center max-w-full text-white bg-transparent  w-11/12 md:w-5/6 lg:w-5/6 xl:w-11/12">
            <div className="md:justify-start w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/2 relative flex justify-center items-center ">
              <Image
                className="md:w-3/6  w-4/6 max-w-4xl  bg-white rounded-2xl"
                src="/dltcode_logo.webp"
                alt="Your Company"
                width={500}
                height={200}
              />
            </div>
            <div className=" md:w-4/6 max-w-4xl lg:w-1/2 flex flex-col gap-3 items-center bg-black bg-opacity-50 md:bg-transparent px-4 py-6 ">
              <h2 className="mt-2 md:mt-6 text-center text-3xl tracking-wider font-bold leading-9 text-white">
                Inicio Sesión
              </h2>
              <h4 className='text-center text-white'>Introduce tu email para iniciar sesión en la página</h4>
              <div className="mt-3 md:mt-6 w-10/12 max-w-md">
              <form className="space-y-6" action="#" method="POST">
              <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6">
                    Correo electrónico
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder='email@domain.com'
                      className="block w-full indent-4  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                    Contraseña
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      placeholder='********'
                      className="block w-full indent-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

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

                  <div className="text-sm leading-6 flex justify-end">
                    <a href="#" className= "underline font-semibold text-right hover:text-customTeal-semidark">
                      ¿Olvidaste la contraseña?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-customTeal-dark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-customTeal-semidark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-customTeal-semidark"
                  >
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-2 md:mt-6 w-full md:w-6/12">
              <div className="flex justify-between">
                <div className="w-1/3 border-t border-gray-200 mt-3" aria-hidden="true">
                </div>
                <div className=" flex justify-center text-sm font-medium leading-6">
                  <span className=" font-semibold  text-center"> O continua con</span>
                </div>
                <div className="w-1/3 border-t border-gray-200 mt-3 " aria-hidden="true">
                </div>
              </div>
              <div className="mt-2 flex md:flex-col gap-4 flex-row">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                      <path
                        d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                        fill="#EA4335"
                      />
                      <path
                        d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                        fill="#34A853"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-7">Google</span>
                  </a>

                  <a
                    href="#"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-gray-200  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
                  >
                    <svg className="h-5 w-5 fill-[#24292F]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-7">GitHub</span>
                  </a>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      
    </>
  )
}
