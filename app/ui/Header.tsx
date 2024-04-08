"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname= usePathname()
    const ruta=pathname.split('/')[pathname.split('/').length-1]
    
    const arrTitles: {[key: string]: string} = {
        dashboard:'DASHBOARD 📊',
        ajustes:'AJUSTES ⚙️',
        support:'TICKETS 🎫',
        analytics:'ANALISIS DE RIESGO  📈',
        policies:'POLITICAS  📜',
        premium: 'PREMIUM 💎',
        preguntas:'PREGUNTAS ❓',
    }
    const title=arrTitles[ruta]
    
    
    return(
        // Header component
        <header className="border-b-2 border-black z-0 bg-white">
            <section className="flex justify-between items-center pb-4">
                {/* Article donde debe de ir el título de la página en la que nos encontramos */}
                <article className="m-3 mt-14 indent-16 ">
                    <h1 className="text-black text-4xl font-bold">{title}</h1>
                </article>
                {/* Article donde se encuentra el buscador y los Links a los ajustes y al soporte */}
                <article className="flex mt-9 relative">
                    {/* Container para el buscador */}
                    <div className="relative">
                        <input className="border rounded-lg mt-2 p-2 pl-8 w-auto h-10 text-black" type="text" name="" id="" placeholder="Buscar..." />
                        <div className="absolute left-2 top-5">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex ml-10">
                        {/* Imagen para ir al soporte */}
                        <Link className="px-3" href={`../dashboard/support`}>
                            <Image src="/tickets.png" alt="" width={60} height={20} />
                        </Link>
                        <Link className="px-3 pt-2" href={`../dashboard/support`}>
                            <Image src="/question.png" alt="" width={40} height={20} />
                        </Link>
                        {/* Imagen para ir a los ajustes  */}
                        <Link className="pr-3" href={`../dashboard/ajustes`}>
                            <Image src="/setting.png" alt="" width={60} height={20} />
                        </Link>
                    </div>
                </article>
            </section>
        </header>
    )
}