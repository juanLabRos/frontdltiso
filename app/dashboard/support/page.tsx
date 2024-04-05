import Aside from "@/app/ui/Aside";
import Header from "@/app/ui/Header";
import Image from "next/image";

export default function support() {
    return (
        <div className="flex h-screen">
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
    )
}