import CheckBoxPremium from "./CheckBoxPremium"


export default function PremiumBox({marked, price=0, funcionality='basicas', typePrime='GRATIS'}:{marked:boolean, 
    price?:number, funcionality?:string, typePrime?:string}){
    return (
        <>
        <article className="flex flex-col">
            <div>
              <div className={`${typePrime=='GRATIS' ? 'bg-[#D0659E]'  : 'bg-[#30A695]'} text-center py-2 rounded-t-xl`}>
                <span className="text-white text-[36px] font-bold">{typePrime}</span>
              </div>
              <div className={`${typePrime=='GRATIS' ? 'bg-[#D981AE]'  : 'bg-[#38C2AE]'} flex flex-col gap-3 items-center`}>
                <span className="text-3xl font-bold mt-3">{price}$</span>
                <p className="text-[20px]">Funciones {funcionality}</p>
                <button className={`${typePrime=='GRATIS' ? 'bg-[#D0659E]'  : 'bg-[#30A695]'} text-[20px] rounded-[10px] w-[50%]  px-4 py-2 mb-3`}>Suscribirse</button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
                    <CheckBoxPremium marked={true}/>
                    <CheckBoxPremium marked={marked}/>
                    <CheckBoxPremium marked={marked}/>
                    <CheckBoxPremium marked={marked}/>
                    <CheckBoxPremium marked={marked}/>
                    <CheckBoxPremium marked={marked}/>
            </div>
          </article>
      </>
    )
}