import React, { useRef } from "react";
import careerImg from "../Assets/Images/career.svg";
import { User, Key } from "../Icons/Icons";
import { Link } from "react-router-dom";
// sign-in-up-form
const AuthPage = () => {
  const formsRef = useRef(null);
  // const buttonsRef = useRef(null);
  const handleToggle = (e) => {
    const formToShow = e.target.dataset.sib;
    console.log(formToShow);

    const forms = Array.from(formsRef.current.children);

    forms.forEach((form) => {
      if (form.dataset.sib === formToShow) {
        form.classList.add("form--active");
        form.classList.remove("form--sleeping");
      } else {
        form.classList.remove("form--active");
        form.classList.add("form--sleeping");
      }
    });
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
                data-sib="login"
                onClick={handleToggle}
              >
                login
              </button>
              <button
                className="auth-toggle__button"
                data-sib="signup"
                onClick={handleToggle}
              >
                sign up
              </button>
            </div>
            <h1 className="auth--title">MentorshipCradle</h1>
          </div>

          <div className="forms" ref={formsRef}>
            <form action="get" className="login-form" data-sib="login">
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
                  placeholder="Username eg Jack Dossey"
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
            </form>

            {/* sign up form */}
            <form
              action="post"
              className="signup-form form--sleeping"
              data-sib="signup"
            >
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
                <label htmlFor="pass" className="form-col-lbl">
                  password
                </label>
                <input
                  type="password"
                  id="pass"
                  className="form__col--input"
                  placeholder="create your password"
                />
              </div>
              <div className="form-col-input-wrapper">
                <label htmlFor="conf-pass" className="form-col-lbl">
                  confirm password
                </label>
                <input
                  type="password"
                  id="conf-pass"
                  className="form__col--input"
                  placeholder="confirm password"
                />
              </div>
              <div className="form-col-input-wrapper">
                <label htmlFor="org" className="form-col-lbl">
                  Your organisation
                </label>
                <input
                  type="text"
                  id="org"
                  className="form__col--input"
                  placeholder="name of your organisation"
                />
              </div>
              <Link to="/main-page" className="sign-up-btn">
                sign me up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
