import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";

export interface AuthContextType {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [isAuth, setAuth] = useState(false);

  function login() {
    setAuth(true);
  }

  function logout() {
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
