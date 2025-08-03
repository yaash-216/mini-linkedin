import React, { createContext, useEffect, useState } from "react";
import type { AuthContextType } from "../types";
import { useNavigate } from "react-router";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")!));
  const navigate = useNavigate();
  const login = (userData: any) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")!);
    if (storedUser) {
      setUser(storedUser);
    } 
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
