import Header from "./../../components/Header";
import Aside from "./../../components/Aside";
import Image from "next/image";
import Tick from "./../../../public/tick.svg";


export default function Premium() {
  return (
    // Dashboard component
    <>
      {/* Header */}
      <div>
        <Header title="Premium" />
      </div>
      {/* Aside */}
      <div>
        <Aside />
      </div>
      {/* Contenido pagina premium */}
      <main className="bg-white flex flex-col justify-items-center h-screen">
        <h1 className="font-bold text-[36px] text-black text-center py-10">
          ¿Quiere conseguir funcionalidades extras?
        </h1>
        <div className="flex justify-center gap-16 mt-5">
          <article className="flex flex-col text-center gap-0.5 mt-[232px] ">
            <p className="text-black px-8 py-3 bg-[#F0F3F4] w-[360px]">
              Funciones para ver la documentación
            </p>
            <p className="text-black px-8 py-3 bg-[#F0F3F4] w-[360px]">
              Dashboard Inteligent
            </p>
            <p className="text-black px-8 py-3 bg-[#F0F3F4] w-[360px]">
              Wizard ISO 27001
            </p>
            <p className="text-black px-8 py-3 bg-[#F0F3F4] w-[360px]">
              Data Analytics
            </p>
            <p className="text-black px-8 py-3 bg-[#F0F3F4] w-[360px]">
              Analisis de Riesgo
            </p>
            <p className="text-black px-8 py-3 bg-[#F0F3F4] w-[360px]">
              Politicas Generadas
            </p>
          </article>
          <article className="flex flex-col">
            <div>
              <div className="bg-[#D0659E] text-center py-2 rounded-t-xl">
                <span className="text-white text-[36px] font-bold">GRATIS</span>
              </div>
              <div className="bg-[#D981AE] flex flex-col gap-3 items-center">
                <span className="text-3xl font-bold mt-3">0$</span>
                <p className="text-[20px]">Funciones básicas</p>
                <button className="bg-[#D0659E] text-[20px] rounded-[10px] w-[50%]  px-4 py-2 mb-3">Suscribirse</button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#D981AE]">
                    <Image src={Tick} alt="tick" className="text-center"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#F0F3F4]">
                    <Image src={Tick} alt="tick" className="text-center opacity-0"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#F0F3F4]">
                    <Image src={Tick} alt="tick" className="text-center opacity-0"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#F0F3F4]">
                    <Image src={Tick} alt="tick" className="text-center opacity-0"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#F0F3F4]">
                    <Image src={Tick} alt="tick" className="text-center opacity-0"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#F0F3F4]">
                    <Image src={Tick} alt="tick" className="text-center opacity-0"/>
                  </div>
                </div>
            </div>
          </article>
          

          <article className="flex flex-col">
            <div>
              <div className="bg-[#30A695] text-center py-2 rounded-t-xl">
                <span className="text-white text-[36px] font-bold">GRATIS</span>
              </div>
              <div className="bg-[#38C2AE] flex flex-col gap-3 items-center">
                <span className="text-3xl font-bold mt-3">0$</span>
                <p className="text-[20px]">Funciones básicas</p>
                <button className="bg-[#30A695] text-[20px] rounded-[10px] w-[50%]  px-4 py-2 mb-3">Suscribirse</button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#38C2AE]">
                    <Image src={Tick} alt="tick" className="text-center"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#38C2AE]">
                    <Image src={Tick} alt="tick" className="text-center"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#38C2AE]">
                    <Image src={Tick} alt="tick" className="text-center"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#38C2AE]">
                    <Image src={Tick} alt="tick" className="text-center"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#38C2AE]">
                    <Image src={Tick} alt="tick" className="text-center"/>
                  </div>
                </div>
                <div className="flex justify-center px-8 py-[10px] bg-[#F0F3F4] min-w-[360px]">
                  <div className="p-1 rounded-full bg-[#38C2AE]">
                    <Image src={Tick} alt="tick" className="text-center"/>
                  </div>
                </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
