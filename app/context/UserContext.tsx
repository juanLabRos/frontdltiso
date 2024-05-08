'use client'
import { createContext, useState, FC, ReactNode } from 'react';

// Definición de tipos para la información del usuario
type UserData = {
  id?: number;
  email: string;
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

  return (
    <UserContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UserContext.Provider>
  );
};
