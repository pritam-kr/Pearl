import axios from "axios";
import { useEffect, createContext, useContext, useReducer } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 

const AuthContext = createContext()

const AuthContextProvider = ({children}) =>{
    
    const getToken = localStorage.getItem("login-Token")

    
    const [token, setToken] = useState(null)

    
    return <AuthContext.Provider value={{token, setToken, getToken}}>
        {children}
    </AuthContext.Provider>

}

const useAuthContext = () => useContext(AuthContext)


export {AuthContextProvider, useAuthContext}