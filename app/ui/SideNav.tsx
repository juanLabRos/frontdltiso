import Image from "next/image";
import Link from "next/link";
//import NavLinks from './nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';


export default function SideNav() {
    return(
        //Logo DLTCode
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div className="mb-1 flex items-end justify-start rounded-md bg-customTeal-default p-4 md:h-32">
          <div className="w-32 text-white ">
            <Image
              src="/logo.png" 
              alt="logo"
              width={100} 
              height={100}
            />
          </div>
        </div>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* <NavLinks /> */}
        <div className="hidden h-auto w-full grow rounded-md bg-customTeal-default md:block"></div>
        <form>
          <button className="mb-1 flex items-end justify-start rounded-md bg-customTeal-default p-4 md:h-32">
          <Image
              src="/signout.png" 
              alt="cerrar"
              width={100} 
              height={100}
            />
          </button>
        </form>
      </div>
    </div>

    )
}