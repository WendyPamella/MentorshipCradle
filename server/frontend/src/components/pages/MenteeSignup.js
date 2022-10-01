
import React, { useState } from "react";
import './mentorSignup.css'
import careerImg from "../../assets/Images/career.svg";
import FormInput from "../FormInput";
import { Link } from "react-router-dom";
import axios from "axios";

const MentorSignup = () => {
      
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    // company: "",
    campus: "",    
    password: ""
    // confirmPassword: "",
  });
 
  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "firstname",
      errorMessage:
        "Firstname should be 3-16 characters!",
      label: "FirstName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "lastname",
      errorMessage:
        "Lastname should be 3-16 characters",
      label: "LastName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    // {
    //   id: 4,
    //   name: "company",
    //   type: "text",
    //   placeholder: "company",
    //   errorMessage:
    //     "Company should be 3-16 characters",
    //   label: "Company",
    //   pattern: "^[A-Za-z0-9]{3,16}$",
    //   required: true,
    // },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 4-20 characters",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "campus",
      type: "text",
      placeholder: "campus",
      errorMessage:
        "Campus should be 3-16 characters!",
      label: "Campus",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    
    // {
    //   id: 7,
    //   name: "confirmPassword",
    //   type: "password",
    //   placeholder: "Confirm Password",
    //   errorMessage: "Passwords don't match!",
    //   label: "Confirm Password",
    //   pattern: values.password,
    //   required: true,
    // },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const res = await axios.post("/auths/menteesignup", values)
      res.status && window.location.replace("/mentee-login")
    }catch(err){
      alert(err.response.data)
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <div className="auth-page-container__image">
     <img
        src={careerImg}
        alt="career progress"
        className="auth-page-container__image--img"
      />
    </div>
      <form>
      
        <h1>Register AS A Mentee</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button  onClick={handleSubmit} >Sign UP</button>
        <Link to="/mentee-login" >
             Login into your Account
   </Link>
      </form>
    </div>
  );
};
export default MentorSignup;
// import React,  { useState }  from 'react';
// import { Link } from "react-router-dom";
// import axios from "axios";
// import careerImg from "../../assets/Images/career.svg";
// import '../../App.css';

// export default function MenteeSignup() {
  
//     const [firstname, setFname]= useState("")
//     const [lastname, setLname]= useState("")
//     const [email, setEmail]= useState("")
//     const [campus, setCampus]= useState("")
//     const [course, setCourse]= useState("")
//     const [password, setPassword]= useState("")

//     const handleSignup = async (e)=>{
//       e.preventDefault();
//       try{
//         const res = await axios.post("/auths/mentorsignup", {firstname,lastname,email,campus,course,password})
//         console.log(res.data)
//       }catch(err){
        
//       }
//     };

//   return (
//   <div className="authentication-page">
//   <div className="auth-page-container">
//     <div className="auth-page-container__image">
//       <img
//         src={careerImg}
//         alt="career progress"
//         className="auth-page-container__image--img"
//       />
//     </div>
//     <div className="forms__container">
//       <div className="forms__container--header">
//         <div className="auth__toggle-buttons">
//           <button
//             className="auth-toggle__button"
           
//           >
//             Signup As  Mentee
//           </button>
          
//         </div>
//         <h1 className="auth--title">MentorshipCradle</h1>
//       </div>

//       <div className="forms">
//         <form className="login-form">
//           <h2 className="auth-form-title">Create your account.</h2>
//           <div className="form__flex-box">
//                 <div className="form-col-input-wrapper">
//                   <label htmlFor="firstname" className="form-col-lbl">
//                     first name
//                   </label>
//                   <input
//                     type="text"
//                     className="form__col--input"
//                     placeholder="first name"
//                     onChange={e=>setFname(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-col-input-wrapper">
//                   <label htmlFor="lastname" className="form-col-lbl">
//                     last name
//                   </label>
//                   <input
//                     type="text"
//                     className="form__col--input"
//                     placeholder="last name"
//                     onChange={e=>setLname(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="form__flex-box">
//                 <div className="form-col-input-wrapper">
//                   <label htmlFor="campus" className="form-col-lbl">
//                     Campus
//                   </label>
//                   <input
//                     type="text"
//                     className="form__col--input"
//                     placeholder="Campus"
//                     onChange={e=>setCampus(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-col-input-wrapper">
//                   <label htmlFor="course" className="form-col-lbl">
//                     Course
//                   </label>
//                   <input
//                     type="text"
//                     className="form__col--input"
//                     placeholder="Course"
//                     onChange={e=>setCourse(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="form-col-input-wrapper">
//                 <label htmlFor="email" className="form-col-lbl">
//                   email address
//                 </label>
//                 <input
//                   type="email"
//                   className="form__col--input"
//                   placeholder="Email"
//                   onChange={e=>setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="form-col-input-wrapper">
//                 <label htmlFor="email" className="form-col-lbl">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form__col--input"
//                   placeholder="password"
//                   onChange={e=>setPassword(e.target.value)}
//                 />
//               </div>
//           {/* submit button */}
//           <button className="auth-submit-btn" onClick={handleSignup}>Sign UP</button>
        
//           <Link to="/mentee-login" >
//             Login into your Account
//           </Link>
//         </form>

        
//       </div>
//     </div>
//   </div>
// </div>
// );
// };

