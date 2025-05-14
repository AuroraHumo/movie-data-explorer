import type { ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (firebaseUser) => {
        setUser(firebaseUser);
        setIsLoading(false);
        console.log("Usuari des del AuthProvider:", firebaseUser);
      });
  
      return () => unsub();
    }, []);
  
    return (
      <AuthContext.Provider value={{ user, isLoading }}>
        {children}
      </AuthContext.Provider>
    );
  };
  