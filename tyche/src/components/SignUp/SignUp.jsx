import React, { useState } from "react";
import './SignUp.css';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import Validation from "./SignValidation";
import { Link } from "react-router-dom";


function SignUp()  {

    const [values, setValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '' 
    })

    const [errors,setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name ]: [event.target.value]}))
    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setValues(Validation(values));
        
    }

    return (
        <div className="wrapper">
            <form action="" onSubmit={handleSubmit}>
                <h1 >Welcome to Tyche!</h1>
                <div className="input-box">
                    <input type="text" placeholder="Email" name="email"  required onChange={handleInput}/>
                    {errors.email && <span className="text-alert">{errors.email} </span>}
                </div>
                <div className="input-box">
                    <input type="text" placeholder="First Name" name="firstName" onChange={handleInput} required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Last Name" name="lastName" onChange={handleInput} required/>
                </div>
                <div className="input-box">
                    
                        <input type="text" placeholder="Password" name="password" onChange={handleInput} required /> 
                        {errors.password && <span className="text-alert">{errors.password} </span>}
                        <div className="eye-icon"></div>
                        
                </div>
                
                <div className="submit-button">
                    <input type="submit" value="Sign Up" />
                </div>
                <div className="sign-up"> 
                    <a href = "a"> Already on Tyche? Log In</a>
                </div>

            </form>
        </div>
    );
};

export default SignUp;