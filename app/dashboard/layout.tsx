import Aside from "../ui/Aside";
import Header from "../ui/Header";

export default function LayoutDashBoard({children}: {children: React.ReactNode}) {
        
    
    return(
            <div className="flex h-screen">
                <div className="w-36">
                    <Aside />
                </div>
                <div className="flex w-full flex-col">
                    <Header />
                    {children}
                </div>
            </div>
    )
}