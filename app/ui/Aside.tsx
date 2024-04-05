import Image from "next/image";
import Link from "next/link";

export default function Aside() {
    return(
        <div>
          {/* LOGO */}
          <div className="h-screen flex h-full flex-col px-3 py-4 md:px-2">
            <div className="mb-1 flex items-end justify-start rounded-md bg-customTeal-default p-4 md:h-32">
                <Image
                  src="/logo.png" 
                  alt="logo"
                  width={100} 
                  height={100}
                />
          </div>

          <div className="h-screen items-end justify-start rounded-md bg-customTeal-default">
            {/* Menu de navegación */}
            <article className="m-7">
              {/* Imagen para ir al dashboard */}
              <Link className="flex" href={`../dashboard`}>
                <Image src="/dashboard.png" alt="dashboard" width={50} height={20} />
              </Link>
              {/* Imagen para ir al wizzard */}
              <Link className="flex px-3 py-5" href={`../dashboard/wizzard`}>
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
            
            {/* Cerrar Sesion */}
            <div className="fixed bottom-5 px-2 py-5">
              <Link href={`/`}>
                <Image
                  src="/signout.png" 
                  alt="cerrar"
                  width={100} 
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>  
      </div>
    )
}
