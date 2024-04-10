import Aside from "@/app/components/Aside";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function tickets() {
    return (
        <div className="flex h-screen">
            <div className="w-1/7 text-white">
                <div className="h-full flex flex-col justify-center items-center">
                    <Aside />
                </div>
            </div>
            <div className="flex flex-col flex-grow">
                {/* Contenido de la página */}
                <div className="flex flex-wrap p-14 justify-center m-20">
                    <div className="border rounded m-3 p-2">
                        <h2 className="text-black text-center">Riesgo Inherente</h2>
                        <Image src="/inherente.png" alt="" width={400} height={100} /> 
                    </div>
                    <div className="border rounded m-3 p-2">
                        <h2 className="text-black text-center">Riesgo Inherente Vs Riesgo Residual</h2>
                        <Image src="/inherentevsresidual.png" alt="" width={400} height={100} /> 
                    </div>
                    <div className="border rounded m-3 p-2">
                        <h2 className="text-black text-center">Tratamiento del Riesgo</h2>
                        <Image src="/riesgo.png" alt="" width={400} height={100} /> 
                    </div>
                </div>
            </div>
        </div>
    )
}