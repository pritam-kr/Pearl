import React, {useEffect} from "react"
import { SignupForm } from "../../component/AuthForms/SignupForm"

const Signup = () => {
    useEffect(() => document.title = "SignUp", [])
    return (
        <>
            <div className="form-page">
                <SignupForm />
            </div>
        </>
    )
}

export { Signup }