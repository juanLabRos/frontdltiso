'use client'
import React, { useState, createContext, useContext, Dispatch, SetStateAction } from "react";
import { Usuario } from '../lib/definitions';

// Define un valor predeterminado para tu contexto
interface UserContextType {
  usersData: Usuario[]; // Cambia el tipo a Usuario
  setUsersData: Dispatch<SetStateAction<Usuario[]>>; // Utiliza los tipos Dispatch y SetStateAction
}

const UserContext = createContext<UserContextType>({
  usersData: [],
  setUsersData: () => {},
});

// Crea un hook personalizado para usar tu contexto
export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [usersData, setUsersData] = useState<Usuario[]>([]); // Cambia el tipo a Usuario[]

  return (
    <UserContext.Provider value={{ usersData, setUsersData }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = (): UserContextType => useContext(UserContext);
