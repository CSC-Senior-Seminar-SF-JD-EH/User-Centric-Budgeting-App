import React from "react";
import './Login.css';


const Login = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Password" required /> 
                
                </div>
                <div className="forgot-password"> 
                    <a href = "a"> Forgot Password?</a>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Log In" />
                </div>
                <div className="sign-up"> 
                    <a href = "a"> Not on Tyche yet? Sign Up</a>
                </div>

            </form>
        </div>
    );
};

export default Login;