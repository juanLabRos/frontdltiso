"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react'


export default function Header() {
    const pathname= usePathname()
    const ruta=pathname.split('/')[pathname.split('/').length-1]
    
    const arrTitles: {[key: string]: string} = {
        dashboard:'DASHBOARD 📊',
        ajustes:'AJUSTES ⚙️',
        tickets:'TICKETS 🎫',
        analytics:'ANALISIS DE RIESGO  📈',
        policies:'POLITICAS  📜',
        premium: 'PLANES 💎',
        preguntas:'PREGUNTAS ❓',
    }

    const [activeLinkIndex, setActiveLinkIndex] = useState<string | false>(false);

    useEffect(() => {
        setActiveLinkIndex(ruta);
    }, [ruta]);

    return (
        <header className="border-b-2 border-black z-0 bg-white">
            <section className="flex justify-between items-center pb-4">
                <article className="m-3 mt-14 indent-16">
                    <h1 className="text-black text-4xl font-bold">{arrTitles[ruta]}</h1>
                </article>
                <article className="flex mt-9 relative">
                    <div className="relative">
                        <input className="border rounded-lg mt-2 p-2 pl-8 w-auto h-10 text-black" type="text" name="" id="" placeholder="Buscar..." />
                        <div className="absolute left-2 top-5">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex ml-10">
                        <Link className={`px-3`} onClick={() => setActiveLinkIndex('tickets')} href={`../dashboard/tickets`}>
                            <Image src={activeLinkIndex === 'tickets' ? "/tickets1.svg" : "/tickets.svg"} alt="" width={60} height={20} />
                        </Link>
                        <Link className={`px-3`} onClick={() => setActiveLinkIndex('ajustes')} href={`../dashboard/settings`}>
                            <Image src={activeLinkIndex === 'settings' ? "/settings1.svg" : "/settings.svg"} alt="" width={60} height={20} />
                        </Link>
                    </div>
                </article>
            </section>
        </header>
    )
}