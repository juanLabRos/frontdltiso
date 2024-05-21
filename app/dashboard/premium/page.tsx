"use client";
import { useState, useEffect } from "react";
import PremiumBox from "@/app/components/PremiumBox";
import PremiumData from "@/app/components/PremiumData";

export default function Premium() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isLargeScreen = windowWidth >= 1300;

  return (
    <>
      <main className="bg-gray-100 flex flex-col justify-items-center h-screen">
        <h1 className="font-bold text-[36px] text-black text-center py-10">
          ¿Quiere conseguir funcionalidades extras?
        </h1>
        <table>
          <div className="flex flex-col md:flex-row justify-center gap-16 mt-5">
            {isLargeScreen && (
              <article className="flex flex-col text-center gap-0.5 mt-[232px]">
                <PremiumData>Funciones para ver la documentación</PremiumData>
                <PremiumData>Dashboard Inteligente</PremiumData>
                <PremiumData>Wizard ISO 27001 Plus</PremiumData>
                <PremiumData>Data Analytics</PremiumData>
                <PremiumData>Descarga de documentos</PremiumData>
              </article>
            )}
            <article className="flex flex-col">
              <PremiumBox marked={false} />
            </article>
            <article className="flex flex-col">
              <PremiumBox
                marked={true}
                funcionality="premium"
                price={15}
                typePrime="PRO"
              />
            </article>
          </div>
        </table>
      </main>
    </>
  );
}
