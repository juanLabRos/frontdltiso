import Aside from "../ui/Aside";
import Header from "../ui/Header";

export default function LayoutDashBoard({children}: {children: React.ReactNode}) {
        
    
    return(
            <div className="flex max-h-[1100px] mx-center border h-screnn max-w-[2000px]">
                <div className="relative  w-36">
                    <Aside />
                </div>
                <div className="flex w-full flex-col">
                    <Header />
                    {children}
                </div>
            </div>
    )
}