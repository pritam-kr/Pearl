import React from "react";
import "./AuthForms.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <>
            <form className="form">
                <div className="form-header">
                    <h2 className="form-heading">Login</h2>
                </div>

                <div className="input-row">
                    <label className="input-label form-label">Name: </label>
                    <input
                        type="text"
                        placeholder="Enter Text"
                        className="input primary-input"
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
                    />
                </div>

                <div className="input-row">
                    <label className="input-label">
                        <input type="checkbox" className="input checkbox-input" />
                        <span className="checkbox-text">Remember me</span>
                    </label>
                </div>

                <div className="input-row">
                    <button className="btn btn-primary btn-submit text-md">
                        Login
                    </button>
                </div>

                <div className="form-footer">
                    <p className="paragraph">
                        {" "}
                      <Link to="/signup" className="links">  Create an Account. </Link>{" "}
                    </p>
                </div>
            </form>
        </>
    );
};

export { LoginForm };
