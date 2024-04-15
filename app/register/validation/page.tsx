import ButtonCustom from "@/app/components/Login/ButtonCustom"
import Image from "next/image"

export default function Validation(){
    return (
        <div className="text-black grid items-center h-screen">
            {/* Container  */}
            <div className="flex flex-col justify-evenly m-auto my-auto border shadow-xl rounded-lg h-5/6 w-5/6 items-center">
                {/* Image Box */}
                <div>
                    <Image
                        className="md:w-3/6  w-4/6 max-w-4xl mx-auto  bg-white rounded-2xl"
                        src="/dltcode_logo.webp"
                        alt="DLTCode"
                        priority={true}
                        width={500}
                        height={100}
                    />
                </div>
                <h2 className="text-3xl">Se ha enviado un código a su correo</h2>
                <h3 className="text-2xl">Introduzcalo en el siguiente recuadro</h3>
                <input className="border text-center font-bold text-xl tracking-widest w-2/4 h-14 border-gray-700 rounded-md " type="number"  name="validationNumber" id="validationNumber" />
                <a className="w-2/4 text-customTeal-medium font-bold  underline" href="#">Volver a enviar</a>
                <div className=" w-2/6 text-white font-bold py-2 px-4 ">
                    <ButtonCustom>Enviar</ButtonCustom>
                </div>
                
            </div>
        </div>
    )
}