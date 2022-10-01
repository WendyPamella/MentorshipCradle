import React from "react";
import './bb.css'

const Spotlight = ({ name, text, image, location }) => {
  return (
    <div className="sliding-col">
      <div className="user-text">
        <p>{text}</p>
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
      <div className="user-img">
        <img src={image} alt="mentor" />
      </div>
    </div>
  );
};

export default Spotlight;
