

export default function PremiumData({children}:{children:string}){
    return (
        <p className="text-black px-8 py-3 h-14 flex justify-center items-center text-center md:border-none border-white border bg-[#eaeef0] w-[360px]">
              {children}
        </p>
    )
}