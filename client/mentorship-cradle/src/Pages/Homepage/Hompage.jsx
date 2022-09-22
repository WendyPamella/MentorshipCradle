import React from "react";
import Header from "../../Components/Header";
import UserProfile from "./UserProfile/UserProfile";
import img from "../../Assets/Images/user-2.jpg";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <div className="homepage__container">
        <div className="homepage__container--left">
          <UserProfile
            image={img}
            name="jane wendy pamella"
            occupation="software engineer"
            company="TechPrime"
            following="500"
            followers="6M"
          />
        </div>
        <div className="homepage__container--center">
          the center part of the homepage
        </div>
        <div className="homepage__container--right">
          right side of the homepage
        </div>
      </div>
    </div>
  );
};

export default Homepage;
