import Image from "next/image";
import Link from "next/link";

export default function Aside() {
    return(
        // Aside component
        <aside className="bg-customTeal-medium max-h-[1100px] z-10 p-1 rounded-l-lg h-screen flex flex-col fixed left-0 top-0 justify-between">
            <div>
                {/* Logo DLTCode que te lleva al dashboard */}
                <Link className="flex p-4 border-b" href={`../dashboard`}>
                    <Image src="/dltcode.png" alt="dashboard" width={90} height={20} />
                </Link>
                {/* Parte donde se encuentran todos los iconos que te llevan a cada página */}
                <article className="m-7">
                    {/* Imagen para ir al dashboard */}
                    <Link className="flex py-4" href={`../dashboard`}>
                        <Image src="/dashboard.png" alt="dashboard" width={50} height={20} />
                    </Link>
                    {/* Imagen para ir al wizzard */}
                    <Link className="flex px-3 py-5" href={`../dashboard/preguntas`}>
                        <Image src="/questions.png" alt="dashboard" width={30} height={20} />
                    </Link>
                    {/* Imagen para ir a las analiticas */}
                    <Link className="flex px-3 py-5" href={`../dashboard/analytics`}>
                        <Image src="/graph.png" alt="dashboard" width={30} height={20} />
                    </Link>
                    {/* Imagen para ir a las politicas */}
                    <Link className="flex px-2 py-5" href={`../dashboard/policies`}>
                        <Image src="/politicies.png" alt="dashboard" width={40} height={20} />
                    </Link>
                    {/* Imagen para ir a los planes */}
                    <Link className="flex px-2 py-5" href={`../dashboard/premium`}>
                        <Image src="/planes.png" alt="dashboard" width={40} height={20} />
                    </Link>
                </article>
            </div>
            {/* Icono de apagar */}
            <Link className="flex px-9 pb-3" href={`../../`}>
                <Image src="/turnoff.png" alt="dashboard" width={40} height={20} />
            </Link>
        </aside>
    )
}
