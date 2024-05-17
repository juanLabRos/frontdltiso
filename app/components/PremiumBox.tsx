import { useState, useEffect } from 'react';
import CheckBoxPremium from "./CheckBoxPremium";
import PremiumData from "@/app/components/PremiumData";

export default function PremiumBox({ marked, price = 0, funcionality = 'basicas', typePrime = 'GRATIS' }: { marked: boolean, price?: number, funcionality?: string, typePrime?: string }) {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isSmallScreen = windowWidth < 1300;

    return (
        <>
            <article className="flex flex-col text-center items-center ">
                <div>
                    <div className={`${typePrime === 'GRATIS' ? 'bg-[#D0659E]' : 'bg-[#30A695]'} text-center items-center py-2 rounded-t-xl`}>
                        <span className="text-white text-[36px] font-bold">{typePrime}</span>
                    </div>
                    <div className={`${typePrime === 'GRATIS' ? 'bg-[#D981AE]' : 'bg-[#38C2AE]'} flex flex-col gap-3 text-center items-center w-[360px] `}>
                        <span className="text-3xl font-bold mt-3">{price}$</span>
                        <p className="text-[20px] ">Funciones {funcionality}</p>
                        <button className={`${typePrime === 'GRATIS' ? 'bg-[#D0659E]' : 'bg-[#30A695]'} text-center items-center text-[20px] rounded-[10px] w-[50%] px-4 py-2 mb-3`}>Suscribirse</button>
                    </div>
                </div>


                {isSmallScreen ? (
                    <div className="flex flex-col text-center items-center gap-0.5 ">
                        <PremiumData>Dashboard Inteligent</PremiumData>
                        
                        {marked ? (
                            <div className="flex flex-col text-center items-center gap-0.5">
                                <PremiumData>Wizard ISO 27001</PremiumData>
                                <PremiumData>Data Analytics</PremiumData>
                                <PremiumData>Analisis de Riesgo</PremiumData>
                                <PremiumData>Politicas Generadas</PremiumData>
                            </div>
                        ): null}
                    </div>
                ) : (
                    <div className="flex flex-col items-center gap-0.5 ">                      
                        <CheckBoxPremium marked={true} />                        
                        <CheckBoxPremium marked={marked}/> 
                        <CheckBoxPremium marked={marked} />
                        <CheckBoxPremium marked={marked} />
                        <CheckBoxPremium marked={marked} />
                        <CheckBoxPremium marked={marked} />
                    </div>)
                }
            </article>
        </>
    )
}
