import Aside from "@/app/components/Aside";
import Header from "@/app/components/Header";
import Image from "next/image";

export default function support() {
    return (
        <div className="flex h-screen">
            <div className="w-1/7 text-white">
                <div className="h-full flex flex-col justify-center items-center">
                    <Aside />
                </div>
            </div>
            <div className="flex flex-col flex-grow">
                {/* Menú superior */}
                <div className="h-20 fixed top-0 w-full">
                    <Header title={'TICKETS 🎫'} />
                </div>
                {/* Contenido de la página */}
                <div className="flex justify-center items-center h-screen">
                    <form method="" action={''} className="items-start mt-32 border shadow-xl border-black rounded-xl text-black px-52 py-4">
                        <article className="m-2">
                            <h2 className="text-2xl">Asunto del ticket</h2>
                            <input placeholder="Escriba su incidencia" className="border-black border rounded w-full mt-2 p-3" type="text" name="" id="" />
                        </article>
                        <article className="m-2">
                            <h2 className="text-2xl">Detalles del ticket</h2>
                            <textarea placeholder="Desarrolle su incidencia" className="border-black border p-3 mt-2 rounded" name="" id="" cols={30} rows={10}></textarea>
                        </article>
                        <button className="my-4 rounded p-2 aside text-white" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}