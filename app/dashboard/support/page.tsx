import ButtonCustom from "@/app/components/Login/ButtonCustom";

export default function support() {
    return (
        <div className="flex h-screen">
                {/* Contenido de la página */}
                <div className="flex md:scale-90 justify-center w-full h-fit">
                    <form method="" action={''} className="border w-5/6 shadow-xl flex flex-col items-center border-black rounded-xl text-black py-10">
                        <article className="m-2 w-3/4">
                            <h2 className="text-2xl">Asunto del ticket</h2>
                            <input placeholder="Escriba su incidencia" className="border-black border rounded w-full mt-2 p-3" type="text" name="" id="" />
                        </article>
                        <article className="m-2 w-3/4">
                            <h2 className="text-2xl">Detalles del ticket</h2>
                            <textarea placeholder="Desarrolle su incidencia" className="border-black border w-full p-3 mt-2 rounded" name="" id="" cols={30} rows={10}></textarea>
                        </article>
                        <div className="text-white w-1/2 mx-auto">
                            <ButtonCustom>
                                Enviar
                            </ButtonCustom>
                        </div>
                    </form>
                </div>
        </div>
    )
}