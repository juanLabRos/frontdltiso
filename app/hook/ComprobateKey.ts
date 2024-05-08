import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 
import getTokenPassword from "../lib/data";

export default function useComprobateKey () {
  const [key, setKey] = useState<boolean | null>(true); 
  const [load,setLoad]=useState<boolean>(false); // [1
  const param = useSearchParams();


  useEffect(() => {
    
    const id = param.get("id");
    if (id) {
      getTokenPassword(id)
        .then((data) => setKey(data))
        .catch((error) => {
          // Handle error
        })
        .finally(() => {
          setLoad(true);
        });
    } else {
      setKey(false);
      setLoad(true);
    }
  }, [param]);


  return {key,load}
}
