import Aside from "../components/Aside";
import Image from "next/image";
import Header from "../components/Header";

export default function DashBoard() {
    return (
        // Dashboard component
        <div className="flex h-screen">
            {/* Aside */}
            <div className="w-1/7 text-white">
                <div className="h-full flex flex-col justify-center items-center">
                    <Aside />
                </div>
            </div>

            <div className="flex flex-col flex-grow">
                {/* Menú superior */}
                <div className="h-20 fixed top-0 w-full">
                    <Header title={'DASHBOARD 📊'} />
                </div>
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
    );
}
