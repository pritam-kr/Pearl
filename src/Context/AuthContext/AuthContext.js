import { createContext, useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const getToken = localStorage.getItem("login-Token");
  const getLocalStorageUser = localStorage.getItem("user");

  const [token, setToken] = useState(getToken || "");
  const [user, setUser] = useState(JSON.parse(getLocalStorageUser) || "");

  const logoutFun = () => {
    setToken("");
    setUser("");
    localStorage.removeItem("login-Token");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ token, user, setToken, setUser, logoutFun }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
