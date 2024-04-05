import Image from "next/image";
import Link from "next/link";


export default function SideNav() {
    return(
        //Logo DLTCode
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div className="mb-1 flex items-end justify-start rounded-md bg-customTeal-default p-4 md:h-32">
            <Image
              src="/logo.png" 
              alt="logo"
              width={100} 
              height={100}
            />
        </div>
        
        {/* <NavLinks /> */}
          <div className="grow flex items-end justify-start rounded-md bg-customTeal-default p-4 md:h-32">
            {/* Cerrar Sesion */}
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
    )
}