import Aside from "@/app/components/Aside";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function analytics() {
    return (
        <div className="flex h-screen">
            <div className="w-1/7 text-white">
                <div className="h-full flex flex-col justify-center items-center">
                    <Aside />
                </div>
            </div>
            <div className="flex flex-col flex-grow text-black">
                {/* Menú superior */}
                <div className="h-20 fixed top-0 w-full">
                    <Header title={'ANALISIS DE RIESGO 📈'} />
                </div>
                {/* Contenido de la página */}
                <div className="flex justify-center items-center h-screen">
                    <div className="flex-wrap mt-24">
                        <h2 className="flex justify-center text-black text-3xl font-bold">Informe Ejecutivo 👔</h2>
                        <section className="flex justify-around mt-10">
                            <article className="border-r-4 border-black">
                                <h3 className="text-black mr-10 text-center text-xl">Cliente</h3>
                                <div className="mt-10 mr-10">
                                    <Image src="/analisisRiesgo.png" alt="" width={400} height={20} />
                                </div>
                            </article>
                            <article className="ml-20">
                                <h3 className="text-black text-center text-xl">Otros</h3>
                                <div className="mt-10">
                                    <div className="flex items-center">
                                        <p className="py-3">Riesgo general</p>
                                        <p className="border mx-5 px-4 py-1 rounded-full bg-gray-300 text-center">7.1</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="py-3">Probabilidad de ataque</p>
                                        <p className="border mx-5 px-2 py-1 rounded-full bg-gray-300 text-center">62%</p>
                                    </div>
                                    <div className="flex flex-col items-center mt-4">
                                        <p className="py-3">Vulnerabilidad</p>
                                        <Image src="/vulnerabilidad.png" alt="" width={300} height={20} />
                                        <p>Puntuación: 80%</p>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}