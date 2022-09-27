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
            Signup As  Mentee
          </button>
          
        </div>
        <h1 className="auth--title">MentorshipCradle</h1>
      </div>

      <div className="forms">
        <form className="login-form">
          <h2 className="auth-form-title">Create your account.</h2>
          <div className="form__flex-box">
                <div className="form-col-input-wrapper">
                  <label htmlFor="firstname" className="form-col-lbl">
                    first name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="form__col--input"
                    placeholder="first name"
                  />
                </div>
                <div className="form-col-input-wrapper">
                  <label htmlFor="lastname" className="form-col-lbl">
                    last name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="form__col--input"
                    placeholder="last name"
                  />
                </div>
              </div>
              <div className="form__flex-box">
                <div className="form-col-input-wrapper">
                  <label htmlFor="campus" className="form-col-lbl">
                    Campus
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="form__col--input"
                    placeholder="Campus"
                  />
                </div>
                <div className="form-col-input-wrapper">
                  <label htmlFor="course" className="form-col-lbl">
                    Course
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className="form__col--input"
                    placeholder="Course"
                  />
                </div>
              </div>
              <div className="form-col-input-wrapper">
                <label htmlFor="email" className="form-col-lbl">
                  email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="form__col--input"
                  placeholder="last name"
                />
              </div>
              <div className="form-col-input-wrapper">
                <label htmlFor="email" className="form-col-lbl">
                  Password
                </label>
                <input
                  type="password"
                  id="email"
                  className="form__col--input"
                  placeholder="password"
                />
              </div>
          {/* submit button */}
          <Link to="/main-page" className="auth-submit-btn">
            sign UP
          </Link>
          <Link to="/mentee-login" >
            Login into your Account
          </Link>
        </form>

        
      </div>
    </div>
  </div>
</div>
);
};

