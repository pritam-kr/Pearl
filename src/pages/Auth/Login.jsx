import React from "react"
import "./Auth.css"
import { LoginForm } from "../../component/AuthForms/LoginForm"

const Login = () => {
    return (
        <>
            <div className="form-page">
                <LoginForm />
            </div>
        </>
    )
}

export { Login }