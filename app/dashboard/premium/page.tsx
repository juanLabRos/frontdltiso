"use client";
import { useState, useEffect, FormEvent, useContext } from "react";
import PremiumBox from "@/app/components/PremiumBox";
import PremiumData from "@/app/components/PremiumData";
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { UserContext } from "@/app/context/UserContext";
import { changePremium, payPremium } from "@/app/lib/data";

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm=() =>{
  
  const {usuario,setUsuario}= useContext(UserContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>)  => {
    event.preventDefault();
    setLoading(true);
    
    if(usuario?.email!=null){
      const res= await payPremium(usuario?.email);
      
      const prem= await changePremium(usuario?.email);
      setUsuario({...usuario,premium:true});
      window.open(
        res,
        'popupwindow',
        'width=1000,height=600,scrollbars=yes'
      )

    }
    


    /*const { clientSecret, error: backendError } = result
    if (backendError) {
      setError(backendError);
      setLoading(false);
      return;
    }

    const { error: stripeError } = await stripe!.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements!.getElement(CardElement)!,
      },
    });

    if (stripeError) {
      setError(stripeError.message || 'An error occurred');
      setLoading(false);
      return;
    }*/

    setError(null);
    setLoading(false);
    // Pago exitoso, realizar cualquier acción adicional

    const prem= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/changePremium`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email: usuario?.email}),
    });
  };

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-items-center h-full w-full">
        <h1 className="font-bold text-3xl text-black text-center py-10">
          ¿Quiere conseguir funcionalidades extras?
        </h1>
        <table>
          <div className="flex flex-col md:flex-row justify-center gap-16 mt-5">
            <article className="hidden lg:flex flex-col text-center gap-0.5 mt-[213px]">
              <PremiumData>Funciones para ver la documentación</PremiumData>
              <PremiumData>Dashboard Inteligente</PremiumData>
              <PremiumData>Wizard ISO 27001 Plus</PremiumData>
              <PremiumData>Data Analytics</PremiumData>
              <PremiumData>Descarga de documentos</PremiumData>
            </article>
            <article className="lg:flex hidden flex-col">
              <PremiumBox marked={false} />
            </article>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <PremiumBox
                marked={true}
                funcionality="premium"
                price={15}
                typePrime="PRO"
              />
            </form>
          </div>
        </table>
      </div>
    </>
  );
}
 const Premium: React.FC = () =>{
  return (
  
  <Elements stripe={stripePromise}>
    <CheckoutForm/>
  </Elements>)
;}

export default Premium

