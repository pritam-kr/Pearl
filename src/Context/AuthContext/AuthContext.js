import { useEffect, createContext, useContext, useReducer } from "react";
import { useState } from "react";

const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{

    // const [token, setToken] = useState("")

    const getToken = localStorage.getItem("Token")
   

    return <AuthContext.Provider value={{}} >
        {children}
    </AuthContext.Provider>

}

const useAuthContext = () => useContext(AuthContext)


export {AuthContextProvider, useAuthContext}