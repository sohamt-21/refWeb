import React, { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../Pages_CSS/Signup.css";
import axios from "axios";
import Image from "../../Images/User.jpg";


const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let lastname = e.target.lastname.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let confirmPassword = e.target.confirmPassword.value;

        if (name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {

            if (password === confirmPassword) {
                try {
                    const response = await axios.post("http://localhost:9000/addWebUsers", { Name: name, LastName: lastname, Email: email, Password: password }).then(()=>{
                        alert("Registration Successful!!");

                    })
                } catch (err) {
                    
                }
            } else {
               
            }


        } else {
            
        }


    }

    return (
        <div className="register-main">
            <div className="register-left">
                <img src={Image} alt="" />
            </div>
            <div className="register-right">
                <div className="register-right-container">
                    <div className="register-logo">
                    </div>
                    <div className="register-center">
                        <h2>Welcome to our website!</h2>
                        <p>Please enter your details</p>
                        <form onSubmit={handleRegisterSubmit}>
                            <input type="text" placeholder="Name" name="name" required={true} />
                            <input type="text" placeholder="Lastname" name="lastname" required={true} />
                            <input type="email" placeholder="Email" name="email" required={true} />
                            <div className="pass-input-div">
                                <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" required={true} />
                                {showPassword ? <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> : <FaEye onClick={() => { setShowPassword(!showPassword) }} />}

                            </div>
                            <div className="pass-input-div">
                                <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" required={true} />
                                {showPassword ? <FaEyeSlash onClick={() => { setShowPassword(!showPassword) }} /> : <FaEye onClick={() => { setShowPassword(!showPassword) }} />}

                            </div>
                            <div className="register-center-buttons">
                                <button type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Signup;