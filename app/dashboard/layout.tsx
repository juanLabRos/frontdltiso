import { useSession } from "next-auth/react";
import Aside from "../components/Aside";
import Header from "../components/Header";

export default function LayoutDashBoard({ children }: { children: React.ReactNode }) {
    
    return (
        <>
            <div className="flex flex-col lg:flex-row max-h-screen lg:max-h-[1200px] mx-auto border ">
                <div className="lg:relative lg:w-36 h-full">
                    <Aside />
                </div>
                <div className="flex flex-col w-full max-w-screen">
                    <Header />
                    {children}
                </div>
            </div>
        </>
    )
}
