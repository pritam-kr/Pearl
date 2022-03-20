import { createContext, useContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const getToken = localStorage.getItem("login-Token");
  const getLocalStorageUser = localStorage.getItem('user')
  const [token, setToken] = useState(getToken || "");
  const [user, setUser] = useState(JSON.parse(getLocalStorageUser) || "")


  return (
    <AuthContext.Provider value={{ token, setToken, getToken, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthContextProvider, useAuthContext };
