"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';

export default function Header() {
    const pathname = usePathname();
    const ruta = pathname.split('/')[pathname.split('/').length - 1];

    const arrTitles: { [key: string]: string } = {
        dashboard: 'DASHBOARD 📊',
        settings: 'AJUSTES ⚙️',
        tickets: 'TICKETS🎫',
        analytics: 'ANALISIS DE RIESGO 📈',
        policies: 'POLITICAS 📜',
        premium: 'PLANES 💎',
        wizard: 'WIZARD 💬',
    };

    const [activeLinkIndex, setActiveLinkIndex] = useState<string | false>(false);

    useEffect(() => {
        setActiveLinkIndex(ruta);
    }, [ruta]);

    return (
        <header className="border-b-2 border-black z-0 bg-white">
            <section className="flex flex-col md:flex-row justify-between items-center pb-4">
                <article className="m-3 mt-6 md:mt-14 indent-4 md:indent-16 text-center md:text-left ">
                    <h1 className="text-black text-2xl md:text-4xl font-bold">{arrTitles[ruta]}</h1>
                </article>
                
                <article className="flex flex-col items-center mt-4 md:mt-9 relative md:flex-row md:justify-end px-4 md:px-0">
                    <div className="relative mb-4 md:mb-0 w-full md:w-auto">
                        <input className="border rounded-lg p-2 pl-8 w-full md:w-64 h-10 text-black" type="text" placeholder="Buscar..." />
                        <div className="absolute left-2 top-2.5">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                    </div>


                    <div className="flex">
                        <Link className={`px-1 md:px-1 ${activeLinkIndex === 'tickets' ? 'text-blue-500' : 'text-black'}`} onClick={() => setActiveLinkIndex('tickets')} href={`../dashboard/tickets`}>
                            <span className="block md:hidden">Tickets</span>
                            <Image className="hidden md:block" src={activeLinkIndex === 'tickets' ? "/tickets1.svg" : "/tickets.svg"} alt="Tickets" width={60} height={20} />
                        </Link>
                        <Link className={`px-1 md:px-3 ${activeLinkIndex === 'settings' ? 'text-blue-500' : 'text-black'}`} onClick={() => setActiveLinkIndex('settings')} href={`../dashboard/settings`}>
                            <span className="block md:hidden">Ajustes</span>
                            <Image className="hidden md:block" src={activeLinkIndex === 'settings' ? "/settings1.svg" : "/settings.svg"} alt="Settings" width={60} height={20} />
                        </Link>
                    </div>
                </article>
            </section>
        </header>
    );
}
