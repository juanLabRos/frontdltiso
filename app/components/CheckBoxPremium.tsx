import Image from "next/image";
import Tick from "@/public/tick.svg";

export default function CheckBoxPremium({marked}:{marked:boolean}){
    return (
        <div className="text-black px-8 py-3 h-14 flex justify-center items-center text-center md:border-none border-white border bg-[#eaeef0] w-[360px]">
            <div>
                {marked ? <Image src={Tick} alt="tick" className="text-center rounded-full p-1 w-6 h-6  bg-[#38C2AE]"/> : <span className=""> </span>}
            </div>
        </div>
    )
}