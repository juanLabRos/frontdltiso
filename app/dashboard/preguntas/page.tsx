'use client'
import { useState } from "react";
import ButtonCustomB from "@/app/components/Wizzard/ButtonCustomBlue";
import ButtonCustomG from "@/app/components/Wizzard/ButtonCustomGrey";
import InputForm from "@/app/components/Login/InputForm"

export default function wizzard() {
    // Array de preguntas del 1 al 100 (ejemplo)
    const preguntas = Array.from({ length: 10 }, (_, index) => `Pregunta ${index + 1}`);

    const [preguntaActual, setPreguntaActual] = useState(0);
 
    const irAnterior = () => {
        if (preguntaActual > 0) {
            setPreguntaActual(preguntaActual - 1);
        }
    };

    const irSiguiente = () => {
        if (preguntaActual < preguntas.length - 1) { 
            setPreguntaActual(preguntaActual + 1);
        }
    };
 
     return (
         <div className="flex h-screen">
             {/* Contenido de la página */}
             <div className="flex md:scale-90 justify-center w-full h-fit">
                 <form method="" action={''} className="border w-5/6 shadow-xl flex flex-col items-center border-black rounded-xl text-black py-10">
                     <article className="m-2 w-3/4">
                         <h2 className="text-2xl">{preguntas[preguntaActual]}</h2>
                     </article>
                     <article className="mt-5 w-3/4">
                         <InputForm label="Pregunta" name='pregunta' placeholder='Escriba aquí su respuesta' type='text'/>
                     </article>
                     <div className="flex justify-around text-white gap-10 flex-row">
                         <div className="mt-5 mr-10">
                             <ButtonCustomG onClick={irAnterior}>
                                 Anterior
                             </ButtonCustomG>
                         </div>
                         <div className="mt-5 ml-10">
                             <ButtonCustomB onClick={irSiguiente}>
                                 Siguiente
                             </ButtonCustomB>
                         </div>
                     </div>
                 </form>
             </div>
         </div>
     )
 }