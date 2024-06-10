/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { createContext, useState, FC, ReactNode, useEffect } from 'react';

// Definición de tipos para la información del usuario
export type UserData = {
  id?: number;
  email: string;
  password: string;
  newpassword: string;
  username: string;
  fullname: string;
  premium: boolean;
  userPhoto: string;
  // Agrega más propiedades según sea necesario
};

// Definición del tipo del contexto
type UserContextType = {
  usuario: UserData | null;
  setUsuario: (usuario: UserData | null) => void;
};

// Creación del contexto
export const UserContext = createContext<UserContextType>({
  usuario: null,
  setUsuario: () => {},
});

// Proveedor de contexto
export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [usuario, setUsuario] = useState<UserData | null>(null);
  const { data: session, status } = useSession();

  useEffect(() => {
    const user = session?.user.user;
    console.log(user)
    if (session) {
      setUsuario({
        id: user?.id, 
        username: user?.username ?? '',
        fullname: user?.fullname ?? '',
        password: user?.password ?? '',
        newpassword: user?.newpassword ?? '',
        email: user?.email ?? '',
        premium: user?.premium ? true : false,
        userPhoto: user?.userphoto ?? ''
      });
    }
  }, [session]);

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};
