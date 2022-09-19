import React from "react";
import careerImg from "../Assets/Images/career.svg";
import { User, Key } from "../Icons/Icons";
// sign-in-up-form
const AuthPage = () => {
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
              <button className="auth-toggle__button">login</button>
              <button className="auth-toggle__button">sign up</button>
            </div>
            <h1 className="auth--title">MentorshipCradle</h1>
          </div>

          <div className="forms">
            <form action="get" className="login-form">
                <h2 className="auth-form-title">Log into your account.</h2>
                {/* username */}
              <div className="form-input-wrapper">
                <label for="name" className="form-input-icon">
                    <User />
                </label>
                <input type="text" name="" id="name" className="auth-form-text-input" placeholder="Username eg Jack Dossey" />
              </div>
              {/* password */}
              <div className="form-input-wrapper">
                <label for="password" className="form-input-icon">
                    <Key />
                </label>
                <input type="password" name="" id="password" className="auth-form-text-input" placeholder="Password" />
              </div>
              {/* submit button */}
              <a href="/" className="auth-submit-btn">sign in</a>
              <a href="/" className="forgot-password">forgot your password ?</a>
            </form>
            <form action="post" className="signup-form">
              {/* <input type="text" name="name" id="" className="form--input" />
              <input type="text" name="name" id="" className="form--input" />
              <input type="text" name="name" id="" className="form--input" />
              <input type="text" name="name" id="" className="form--input" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
