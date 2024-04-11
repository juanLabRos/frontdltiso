import PremiumBox from "@/app/components/PremiumBox";
import PremiumData from "@/app/components/PremiumData";


export default function Premium() {
  return (
    // Dashboard component
    <>
      {/* Contenido pagina premium */}
      <main className="bg-white flex flex-col justify-items-center h-screen">
        <h1 className="font-bold text-[36px] text-black text-center py-10">
          ¿Quiere conseguir funcionalidades extras?
        </h1>
        <div className="flex justify-center gap-16 mt-5">
          <article className="flex flex-col text-center gap-0.5 mt-[232px] ">
            <PremiumData>
                Funciones para ver la documentación
            </PremiumData>
            <PremiumData>
                Dashboard Inteligent
            </PremiumData>
            <PremiumData>
                Wizard ISO 27001
            </PremiumData>
            <PremiumData>
                Data Analytics
            </PremiumData>
            <PremiumData>
                Analisis de Riesgo
            </PremiumData>
            <PremiumData>
                Politicas Generadas
            </PremiumData>
          </article>
          <article className="flex flex-col">
            <PremiumBox marked={false} />
          </article>

          <article className="flex flex-col">
                <PremiumBox marked={true} funcionality="premium" price={15} typePrime="PRO"/>
          </article>
        </div>
      </main>
    </>
  );
}