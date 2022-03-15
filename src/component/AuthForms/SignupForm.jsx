import React from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
    return (
        <>
            <form className="form">
                <div className="form-header">
                    <h2 className="form-heading">Signup</h2>
                </div>

                <div className="input-row">
                    <label className="input-label form-label">Name: </label>
                    <input type="text" placeholder="Enter Text" className="input primary-input" />
                </div>

                <div className="input-row">
                    <label className="input-label form-label">Email: <span className="required">*</span></label>
                    <input type="email" placeholder="example@gmail.com" className="input required-input form-password-input" required />
                </div>

                <div className="input-row">
                    <label className="input-label form-label">Password: <span className="required">*</span></label>
                    <input type="password" placeholder="******" className="input required-input form-password-input" required />
                </div>

                <div className="input-row">
                    <label className="input-label form-label">Confirm Password: <span className="required">*</span></label>
                    <input type="password" placeholder="******" className="input required-input form-password-input" required />
                </div>

                <div className="input-row">
                    <label className="input-label"><input type="checkbox" className="input checkbox-input " /><span
                        className="checkbox-text">Accept all terms
                        & conditions</span></label>
                </div>

                <div className="input-row">
                    <button className="btn btn-primary btn-submit text-md">Signup</button>
                </div>

                <div className="form-footer">
                    <p className="paragraph"> <Link to="/login"  className="links">Already have an Account. </Link> </p>
                </div>

            </form>
        </>
    )
}

export { SignupForm }