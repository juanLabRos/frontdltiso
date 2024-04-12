"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AsideContentProps {
    currentPath: string;
}

function AsideContent({ currentPath }: AsideContentProps) {
    const [activeLinkIndex, setActiveLinkIndex] = useState<number | false>(false);

    const pathname = usePathname();
    const ruta = pathname.split('/')[pathname.split('/').length - 1];

    const arrTitles: {[key: string]: number} = {
        "dashboard": 0,
        "preguntas": 1,
        "analytics": 2,
        "policies": 3,
        "premium": 4
    }

    useEffect(() => {
        const index = arrTitles[ruta];
        setActiveLinkIndex(index === undefined ? false : index);
    }, [ruta]);

    return (
        <aside className="bg-customTeal-medium max-h-[1100px] z-10 p-1 rounded-l-lg h-screen flex flex-col fixed left-0 top-0 justify-between">
            <div>
                <Link className="flex p-4 border-b" href="../dashboard">
                    <Image src="/dltcode.png" alt="dashboard" width={90} height={20} />
                </Link>
                <article className="m-7">
                    <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(0)} href="../dashboard">
                        <Image src={activeLinkIndex === 0 ? "/dashboard1.svg" : "/dashboard.svg"} alt="dashboard" width={40} height={20} />
                    </Link>
                    <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(1)} href="../dashboard/preguntas">
                        <Image src={activeLinkIndex === 1 ? "/questions1.svg" : "/questions.svg"} alt="dashboard" width={40} height={20} />
                    </Link>
                    <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(2)} href="../dashboard/analytics">
                        <Image src={activeLinkIndex === 2 ? "/graph1.svg" : "/graph.svg"} alt="dashboard" width={40} height={20} />
                    </Link>
                    <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(3)} href="../dashboard/policies">
                        <Image src={activeLinkIndex === 3 ? "/policies1.svg" : "/policies.svg"} alt="dashboard" width={40} height={20} />
                    </Link>
                    <Link className="flex px-3 py-5" onClick={() => setActiveLinkIndex(4)} href="../dashboard/premium">
                        <Image src={activeLinkIndex === 4 ? "/premium1.svg" : "/premium.svg"} alt="dashboard" width={40} height={20} />
                    </Link>
                </article>
            </div>
            <Link className="flex px-9 pb-3" href="../../">
                <Image src="/turnoff.svg" alt="dashboard" width={40} height={20} />
            </Link>
        </aside>
    );
}

export default function Aside() {
    const currentPath = usePathname();
    return <AsideContent currentPath={currentPath} />;
}
