import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, verifyTokenRequest } from "../api/api.js";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const isProduction = import.meta.env.MODE === "production";
  const baseURL = isProduction
    ? "https://starbucksclone-sajor05.onrender.com/api/logout"
    : "http://localhost:4000/api/logout";

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post(baseURL, {}, { withCredentials: true });

      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("userData_")) {
          localStorage.removeItem(key);
        }
      });

      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error al cerrar sesión en el servidor:", error);
    }
  };

  const updateUserLocal = (updatedUser) => {
    setUser(updatedUser);
  };

  useEffect(() => {
    async function checkLogin() {
      try {
        const res = await verifyTokenRequest();

        if (!res.data) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        // Si el backend dice OK, restauramos usuario
        setIsAuthenticated(true);
        setUser(res.data);
        setLoading(false);
      } catch (error) {
        // Si la cookie no existe o es invalida, el backend tira error
        setIsAuthenticated(false);
        setUser(null);
        setLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signin,
        logout,
        user,
        isAuthenticated,
        loading,
        updateUserLocal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
