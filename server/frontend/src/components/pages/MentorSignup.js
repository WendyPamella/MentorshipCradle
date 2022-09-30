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
    position: "",    
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
      name: "position",
      type: "text",
      placeholder: "position",
      errorMessage:
        "Position should be 3-16 characters!",
      label: "Position",
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
      const res = await axios.post("/auths/mentorsignup", values)
      res.status && window.location.replace("/mentor-login")
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
      
        <h1>Register AS A Mentor</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button  onClick={handleSubmit} >Submit</button>
        <Link to="/mentor-login" >
             Login into your Account
   </Link>
      </form>
    </div>
  );
};
export default MentorSignup;
// import React, { useState }  from 'react';
// import { Link } from "react-router-dom";
// import axios from 'axios';
// import careerImg from "../../assets/Images/career.svg";

// import '../../App.css';

// export default function MenteeSignup() {
//   const [firstname, setFirstname]= useState("")
//   const [lastname, setLastName]= useState("")
//   const [position, setPosition]= useState("")
//   const [password, setPassword]= useState("")
//   const [company, setCompany]= useState("")
//   const [email, setEmail]= useState("")

//     const handleSignup = async (e)=>{
//       e.preventDefault();
//       try{
//         const res = await axios.post("/auths/mentorsignup", {firstname,lastname,email,password,position,company})
//         console.log(res.data)
//       }catch(err){
//        console.log(err.message)
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
//             Signup As  Mentor
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
//                     onChange={e=>setFirstname(e.target.value)}
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
//                     onChange={e=>setLastName(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="form__flex-box">
//                 <div className="form-col-input-wrapper">
//                   <label htmlFor="company" className="form-col-lbl">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     className="form__col--input"
//                     placeholder="Company"
//                     onChange={e=>setCompany(e.target.value)}
//                   />
//                 </div>
//                 <div className="form-col-input-wrapper">
//                   <label htmlFor="position" className="form-col-lbl">
//                     Position
//                   </label>
//                   <input
//                     type="text"
//                     className="form__col--input"
//                     placeholder="Position"
//                     onChange={e=>setPosition(e.target.value)}
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
//           <Link to="/mentor-login" >
//             Login into your Account
//           </Link>
//         </form>

        
//       </div>
//     </div>
//   </div>
// </div>
// );
// };

