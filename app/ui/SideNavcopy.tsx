import Image from "next/image";
import Link from "next/link";
//import NavLinks from './nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';


export default function SideNav() {
    return(
        //Logo DLTCode
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          className="mb-1 flex items-end justify-start rounded-md bg-customTeal-default p-4"
          href="/"
        >
          <div className="w-32 text-white ">
            <Image
              src="/logo.png" 
              alt="logo"
              width={100} 
              height={100}
            />
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {/* <NavLinks /> */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          Sing Out
          <Image
              src="/turnoff.png" 
              alt="logo"
              width={90} 
              height={20}
            />
          </button>
        </form>
      </div>
    </div>

    )
}