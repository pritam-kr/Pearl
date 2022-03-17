import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../Context/AuthContext/AuthContext";

const SignupForm = () => {


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const signUpFormHandler = (e) => {
        
        e.preventDefault();
        const signupUser = formData;

        try {
            (async () => {
                const { data } = await axios.post("/api/auth/signup", signupUser);
                localStorage.setItem('Token', data.encodedToken)

            })();

            setFormData({ firstName: "", lastName: "", email: "", password: "" });

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form className="form" onSubmit={(e) => signUpFormHandler(e)}>
                <div className="form-header">
                    <h2 className="form-heading">Signup</h2>
                </div>

                <div className="input-row">
                    <label className="input-label form-label">First Name: </label>
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(event) =>
                            setFormData((prev) => ({
                                ...prev,
                                firstName: event.target.value,
                            }))
                        }
                        placeholder="Enter First Name"
                        className="input primary-input"
                    />
                </div>

                <div className="input-row">
                    <label className="input-label form-label">Last Name: </label>
                    <input
                        type="text"
                        value={formData.lastName}
                        placeholder="Enter Last Name"
                        onChange={(event) =>
                            setFormData((prev) => ({ ...prev, lastName: event.target.value }))
                        }
                        className="input primary-input"
                    />
                </div>

                <div className="input-row">
                    <label className="input-label form-label">
                        Email: <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        value={formData.email}
                        placeholder="example@gmail.com"
                        onChange={(event) =>
                            setFormData((prev) => ({ ...prev, email: event.target.value }))
                        }
                        className="input required-input form-password-input"
                        required
                    />
                </div>

                <div className="input-row">
                    <label className="input-label form-label">
                        Password: <span className="required">*</span>
                    </label>
                    <input
                        type="password"
                        value={formData.password}
                        placeholder="******"
                        onChange={(event) =>
                            setFormData((prev) => ({ ...prev, password: event.target.value }))
                        }
                        className="input required-input form-password-input"
                        required
                    />
                </div>

                <div className="input-row">
                    <label className="input-label">
                        <input type="checkbox" required className="input checkbox-input " />
                        <span className="checkbox-text">Accept all terms & conditions</span>
                    </label>
                </div>

                <div className="input-row">
                    <button className="btn btn-primary btn-submit text-md">Signup</button>
                </div>

                <div className="form-footer">
                    <p className="paragraph">
                        {" "}
                        <Link to="/login" className="links">
                            Already have an Account.{" "}
                        </Link>{" "}
                    </p>
                </div>
            </form>
        </>
    );
};

export { SignupForm };
