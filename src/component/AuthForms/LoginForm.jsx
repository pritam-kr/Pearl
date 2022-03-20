import React from "react";
import "./AuthForms.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../Context";
import { JsonWebTokenError } from "jsonwebtoken";

const LoginForm = () => {

    const [formData, setFormData] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    const { setToken, setUser } = useAuthContext()


    const loginFormHandler = (e) => {
        e.preventDefault()

        const loginUser = formData;

        try {
            (async () => {
                const { data: { foundUser, encodedToken } } = await axios.post("/api/auth/login", loginUser);

                localStorage.setItem('login-Token', encodedToken)
                localStorage.setItem('user', JSON.stringify(foundUser ))
                setUser(foundUser)
                setToken(encodedToken)

                if (encodedToken) {
                    navigate('/allproducts')
                }
            })();

        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <form className="form" onSubmit={(e) => loginFormHandler(e)}>
                <div className="form-header">
                    <h2 className="form-heading">Login</h2>
                </div>

                <div className="input-row">
                    <label className="input-label form-label">Email: </label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="input primary-input"
                        onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                        required
                    />
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
                        onChange={(event) => setFormData((prev) => ({ ...prev, password: event.target.value }))}
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
