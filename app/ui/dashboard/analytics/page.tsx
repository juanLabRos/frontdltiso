import Aside from "@/app/ui/Aside";
import Header from "@/app/ui/Header";
import Image from "next/image";

export default function analytics() {
    return (
        <div className="h-full">
                {/* Contenido de la página */}
                <div className="flex flex-col justify-around items-center h-4/5">
                <h2 className="flex text-black text-center text-3xl mt-24 font-bold">Informe Ejecutivo 👔</h2>
                <section className="flex justify-center w-3/4 mt-10">
                            <article className="border-r-4 w-1/2 flex flex-col items-center border-black">
                                <h3 className="text-black my-5 text-center text-xl">Cliente</h3>
                                <Image src="/analisisRiesgo.png" alt="" width={400} height={400} />
                            </article>
                            <article className="w-1/2">
                                <h3 className="text-black text-center my-5 text-xl">Otros</h3>
                                <div className="mt-10 text-black">
                                    <div className="flex items-center justify-center">
                                        <p className="py-3">Riesgo general</p>
                                        <p className="border mx-5 px-4 py-1 rounded-full bg-gray-300 text-center">7.1</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <p className="py-3">Probabilidad de ataque</p>
                                        <p className="border mx-5 px-2 py-1 rounded-full bg-gray-300 text-center">62%</p>
                                    </div>
                                    <div className="flex flex-col items-center mt-4">
                                        <p className="py-3">Vulnerabilidad</p>
                                        <Image src="/vulnerabilidad.png" alt="" width={400} height={20} />
                                        <p>Puntuación: 80%</p>
                                    </div>
                                </div>
                            </article>
                        </section>
                </div>
                <div></div>
        </div>
    )
}