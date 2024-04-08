import Image from "next/image";
import Tick from "@/public/tick.svg";

export default function CheckBoxPremium({marked}:{marked:boolean}){
    return (
        <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px] ">
            <div className="w-6 h-7">
                {marked ? <Image src={Tick} alt="tick" className="text-center rounded-full p-1  bg-[#38C2AE]"/> : <span className=""> </span>}
            </div>
        </div>
    )
}