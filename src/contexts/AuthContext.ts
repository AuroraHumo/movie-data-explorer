
import type { User } from "firebase/auth";
import { createContext } from "react";

interface AuthContextProps {
  user: User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextProps>({ user: null, isLoading: true });
