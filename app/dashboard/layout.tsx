import { useSession } from "next-auth/react";
import Aside from "../components/Aside";
import Header from "../components/Header";

export default function LayoutDashBoard({ children }: { children: React.ReactNode }) {
    
    return (
        <>
            <div className="flex min-h-screen mx-auto ">
                <Aside />
                <div className="flex ml-24 flex-col w-full  ">
                    <Header />
                    <div className="h-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
