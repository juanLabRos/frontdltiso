import Header from "./../../components/Header";
import Aside from "./../../components/Aside";

export default function Premium() {
  return (
    // Dashboard component
    <>
      {/* Header */}
      <div>
        <Header title="{Premium}" />
      </div>
      {/* Aside */}
      <div>
        <Aside />
      </div>
      {/* Contenido pagina premium */}
      <main className="bg-white">
        <h1 className="font-bold text-[36px] text-black text-center py-10">
          ¿Quiere conseguir funcionalidades extras?
        </h1>
        <div className="flex pb-[80px]">
          <article className="flex flex-col items-center gap-0.5 mt-[240px] ml-[300px]">
            <p className="text-black px-8 py-4 bg-[#F0F3F4]">
              Funciones para ver la documentación
            </p>
            <p className="text-black px-8 py-4 bg-[#F0F3F4]">
              Funciones para ver la documentación
            </p>
            <p className="text-black px-8 py-4 bg-[#F0F3F4]">
              Funciones para ver la documentación
            </p>
            <p className="text-black px-8 py-4 bg-[#F0F3F4]">
              Funciones para ver la documentación
            </p>
            <p className="text-black px-8 py-4 bg-[#F0F3F4]">
              Funciones para ver la documentación
            </p>
            <p className="text-black px-8 py-4 bg-[#F0F3F4]">
              Funciones para ver la documentación
            </p>
          </article>
          <article className="flex flex-col">
            <div>
              <div className="bg-[#D0659E] text-center">
                <span className="text-white">GRATIS</span>
              </div>
              <div className="bg-[#D981AE] text-center">
                <span>0$</span>
                <p>Funciones básicas</p>
                <button className="bg-[#D0659E] text-[20px] rounded-[10px] px-4 py-2">Suscribirse</button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0.5">
                <div className="px-8 py-4 bg-[#F0F3F4]"></div>
                <div className="px-8 py-4 bg-[#F0F3F4]"></div>
                <div className="px-8 py-4 bg-[#F0F3F4]"></div>
                <div className="px-8 py-4 bg-[#F0F3F4]"></div>
                <div className="px-8 py-4 bg-[#F0F3F4]"></div>
                <div className="px-8 py-4 bg-[#F0F3F4]"></div>
            </div>
          </article>
          <article></article>
        </div>
      </main>
    </>
  );
}
