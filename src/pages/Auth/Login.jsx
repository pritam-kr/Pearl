import React,{useEffect} from "react"
import "./Auth.css"
import { LoginForm } from "../../component/AuthForms/LoginForm"

const Login = () => {

    useEffect(() => document.title = "Login", [])

    return (
        <>
            <div className="form-page">
                <LoginForm />
            </div>
        </>
    )
}

export { Login }