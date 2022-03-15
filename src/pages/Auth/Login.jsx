import React from "react"
import "./Auth.css"
import { LoginForm } from "../../component/AuthForms/LoginForm"

const Login = () => {
    return (
        <>
            <div className="login-form-container center">
                <LoginForm />
            </div>
        </>
    )
}

export { Login }