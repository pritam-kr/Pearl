import React from "react";
import "./AuthForms.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../Context";
import { regEx } from "../../utils/regEx"
import { toast } from "react-hot-toast"
import 'react-toastify/dist/ReactToastify.css';

//User Logged in message showing 
const loggedMessage = (foundUser) => {
    const {firstName, lastName} = foundUser
    toast.success (`Welcome ${firstName} ${lastName}`)
}

const LoginForm = () => {

  

    const [formData, setFormData] = useState({ email: "", password: "" });  
    const navigate = useNavigate();
    const { setToken, setUser } = useAuthContext();
    const [error, setError] = useState("")


    const loginFormHandler = (e) => {
        e.preventDefault();

        if (regEx.test(formData.email)) {

            (async () => {

                try {
                    const {
                        status,
                        data: { foundUser, encodedToken },
                    } = await axios.post("/api/auth/login", formData);

                    // Logged message 
                    status === 200? loggedMessage(foundUser) : null

                    // Saving data at local storage
                    localStorage.setItem("login-Token", encodedToken);
                    localStorage.setItem("user", JSON.stringify(foundUser));

                    setUser(foundUser);
                    setToken(encodedToken);

                    if (encodedToken) {
                        navigate("/allproducts");
                    }
                }

                catch (error) {  
                const {data : {errors}} = error.response
                setError(...errors)
                }
            })();

        } else if (!regEx.test(formData.email)) {
            setError("Email is not Valid")

        } else {
            setError("")
        }


    };

    return (
        <>
       
            <form className="form" onSubmit={(e) => loginFormHandler(e)}>
                <div className="form-header">
                    <h2 className="form-heading">Login</h2>
                </div>

                <div className="input-row">
                    <label className="input-label form-label">Email: </label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        className="input primary-input"
                        onChange={(event) =>
                            setFormData((prev) => ({ ...prev, email: event.target.value }))
                        }
                        autoComplete="true"
                        value={formData.email}
                    />

                    
                    <p className="text-sm error">{error}</p>
                </div>

                <div className="input-row">
                    <label className="input-label form-label">
                        Password: <span className="required">*</span>
                    </label>
                    <input
                        type="password"
                        placeholder="******"
                        className="input required-input form-password-input"
                        required
                        onChange={(event) =>
                            setFormData((prev) => ({ ...prev, password: event.target.value }))
                        }
                        autoComplete="true"
                        value={formData.password}
                    />
                </div>

                <div className="input-row">
                    <label className="input-label">
                        <input type="checkbox" className="input checkbox-input" />
                        <span className="checkbox-text">Remember me</span>
                    </label>
                </div>

                <div className="input-row">
                    <button className="btn btn-primary btn-submit text-md">Login</button>
                    <p className="text-credential center text-sm" onClick={() => setFormData({email: "pritamvr9@gmail.com", password: "pritam123"})} >Login with Test Credential</p>
                </div>

                <div className="form-footer">
                    <p className="paragraph">
                        {" "}
                        <Link to="/signup" className="links">
                            {" "}
                            Create an Account.{" "}
                        </Link>{" "}
                    </p>
                </div>
            </form>
        </>
    );
};

export { LoginForm };
