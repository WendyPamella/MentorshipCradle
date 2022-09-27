import React,  { useRef }  from 'react';
import { Link } from "react-router-dom";

import careerImg from "../../assets/Images/career.svg";
import { User, Key } from "../../Icons/Icons";
import '../../App.css';

export default function MenteeSignup() {
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
                  type="text"
                  name=""
                  id="name"
                  className="auth-form-text-input"
                  placeholder="Example@gmail.com"
                />
              </div>
              {/* password */}
              <div className="form-input-wrapper">
                <label htmlFor="password" className="form-input-icon">
                  <Key />
                </label>
                <input
                  type="password"
                  name=""
                  id="password"
                  className="auth-form-text-input"
                  placeholder="Password"
                />
              </div>
              {/* submit button */}
              <Link to="/main-page" className="auth-submit-btn">
                sign in
              </Link>
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

