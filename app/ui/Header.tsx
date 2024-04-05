import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return(
        <div className="h-full flex-col py-4 md:px-2">
            <header className="border-b-2 border-black bg-white">
                <section className="flex justify-between items-center pb-4">
                    {/* Dónde nos encontramos */}
                    <article className="m-3 mt-14 mx-40 ">
                        <h1 className="text-black text-4xl font-bold"> TITULO </h1>
                    </article>
                    {/* Buscador */}
                    <article className="flex mt-8 relative">
                        <div className="relative">
                            <input className="border rounded-lg mt-2 p-2 pl-8 w-auto h-10 text-black" type="text" id="" placeholder="Buscar..." />
                            <div className="absolute left-2 top-5">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M14.5 9a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-1.216 3.802a7 7 0 1 0-1.414 1.414l3.592 3.592a1 1 0 0 0 1.414-1.414l-3.592-3.592z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        {/* Tickets + Soporte + Ajustes */}
                        <div className="flex ml-10">
                            <Link className="px-3" href={`../dashboard/tickets`}>
                                <Image src="/tickets.png" alt="" width={60} height={20} />
                            </Link>
                            <Link className="px-3 pt-2" href={`../dashboard/support`}>
                                <Image src="/soporte.png" alt="" width={40} height={20} />
                            </Link>
                            <Link className="pr-3" href={`../dashboard/settings`}>
                                <Image src="/ajustes.png" alt="" width={60} height={20} />
                            </Link>
                        </div>
                    </article>
                </section>
                
            </header>
        </div>
    )
}