import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import careerImg from "../../assets/Images/career.svg";
import { User, Key } from "../../Icons/Icons";
import '../../App.css';

export default function MenteeSignup() {
  const [password, setPassword]= useState("")
    const [email, setEmail]= useState("")

    const handleLogin = async (e)=>{
      e.preventDefault();
      try{
        const res = await axios.post("/auths/mentorsignin", {email,password})
        res.status && window.location.replace("/mentor-dashboard")
      }catch(err){
        alert(err.response.data.message)
      }
    };
  return (
    

  <div className="authentication-page">
  <div className="auth-page-container">
    <div className="auth-page-container__image">
      <img
        src={careerImg}
        alt="career progress"
        className="auth-page-container__image--img"
      />
    </div>
    <div className="forms__container">
      <div className="forms__container--header">
        <div className="auth__toggle-buttons">
          <button
            className="auth-toggle__button"           
          >
            Login As  Mentor
          </button>
          
        </div>
        <h1 className="auth--title">MentorshipCradle</h1>
      </div>

      <div className="forms">
        <form className="login-form">
      
        <h2 className="auth-form-title">Log into your account.</h2>
              {/* username */}
              
              <div className="form-input-wrapper">
                <label htmlFor="name" className="form-input-icon">
                  <User />
                </label>
                <input
                  type="email"
                  required={true}
                  name=""
                  className="auth-form-text-input"
                  placeholder="Example@gmail.com"
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>
              {/* password */}
              <div className="form-input-wrapper">
                <label htmlFor="password" className="form-input-icon">
                  <Key />
                </label>
                <input
                  type="password"
                  className="auth-form-text-input"
                  placeholder="Password"
                  onChange={e=>setPassword(e.target.value)}
                />
              </div>
              
              <button className="auth-submit-btn" onClick={handleLogin}>Sign IN</button>
           
              <a href="/" className="forgot-password">
                forgot your password ?
              </a>
              <Link to="/mentor-signup" >
                Create Account
              </Link>
              
            </form>

        
      </div>
    </div>
  </div>
</div>
);
};

