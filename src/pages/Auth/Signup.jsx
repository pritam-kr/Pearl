import React from "react"
import { SignupForm } from "../../component/AuthForms/SignupForm"

const Signup = () =>{
    return(
        <>
        <div className="login-form-container center">
        <SignupForm />
        </div>
        </>
    )
}

export{Signup}