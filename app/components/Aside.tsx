"use client";
import { signOut } from "next-auth/react";
import { useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, ChatBubbleOvalLeftEllipsisIcon, ChartBarIcon, DocumentTextIcon, StarIcon} from "@heroicons/react/16/solid";


interface AsideContentProps {
    currentPath: string;
}

function AsideContent({ currentPath }: AsideContentProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLinkIndex, setActiveLinkIndex] = useState<number | false>(false);
    const pathname = usePathname();
    const ruta = pathname.split('/')[pathname.split('/').length - 1];

    const arrTitles: { [key: string]: number } = {
        "dashboard": 0,
        "wizard": 1,
        "analytics": 2,
        "policies": 3,
        "premium": 4
    };

    useEffect(() => {
        const index = arrTitles[ruta];
        setActiveLinkIndex(index === undefined ? false : index);
    }, [ruta]);

    
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (isMenuOpen) {
                document.addEventListener("mousedown", handleClickOutside);
            }
        };
    }, [isMenuOpen]);
  

    return (
        <>
            <aside className={`bg-customTeal-medium max-h-[1100px] z-10 p-1 rounded-l-lg min-h-screen flex flex-col fixed left-0 top-0 justify-between transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300`}>
                <div>
                    <Link className="flex p-4 border-b" href="../dashboard">
                        <Image src="/dltcode.png" alt="dashboard" width={90} height={20} />
                        
                    </Link>
                    
                    <article className="m-7">
                        <button className="flex px-5 py-5 text-white md:hidden" onClick={()=>setIsMenuOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        {/*Icons and links*/}
                        <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(0)} href="../dashboard/">
                            {activeLinkIndex === 0 ? (
                                <HomeIcon className="w-10 h-10 text-blue-500" />
                            ) : (
                                <HomeIcon className="w-10 h-10 text-white-500" />
                            )}
                        </Link>
                        <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(0)} href="../dashboard/wizard">
                            {activeLinkIndex === 1 ? (
                                <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-blue-500" />
                            ) : (
                                <ChatBubbleOvalLeftEllipsisIcon className="w-10 h-10 text-white-500" />
                            )}
                        </Link>
                        <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(2)} href="../dashboard/analytics">
                            {activeLinkIndex === 2 ? (
                                <ChartBarIcon className="w-10 h-10 text-blue-500" />
                            ) : (
                                <ChartBarIcon className="w-10 h-10 text-white-500" />
                            )}
                        </Link>
                        <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(3)} href="../dashboard/policies">
                            {activeLinkIndex === 3 ? (
                                <DocumentTextIcon className="w-10 h-10 text-blue-500" />
                            ) : (
                                <DocumentTextIcon className="w-10 h-10 text-white-500" />
                            )}
                        </Link>
                        <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(4)} href="../dashboard/premium">
                            <Image src={activeLinkIndex === 4 ? "/premium1.svg" : "/premium.svg"} alt="dashboard" width={40} height={20} />
                        </Link>
                    </article>
                </div>
                <button onClick={() => { signOut(); }} className="flex px-9 pb-3">
                    <Image src="/turnoff.png" alt="dashboard" width={40} height={20} />
                </button>
            </aside>

            {!isMenuOpen && (
                <button className="md:hidden fixed top-4 left-4 z-20 bg-customTeal-medium text-white p-2 rounded" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            )}
        </>
    );
}

export default function Aside() {
    const currentPath = usePathname();
    return <AsideContent currentPath={currentPath} />;
}
