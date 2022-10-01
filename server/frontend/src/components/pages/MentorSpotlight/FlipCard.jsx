import React from "react";
import './bb.css'
import img from "../../../assets/Images/img6.jpg";

const FlipCard = ({ image, title, role }) => {
  return (
    <div className="flip">
      <div className="wrapper">
        <div className="card front-face">
          <img src={img} alt="_image" />
        </div>
        <div className="card back-face">
          <img src={image} alt="_image" />
          <div className="info">
            <div className="title">{title}</div>
            <p>{role}</p>
          </div>
          <ul>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;

{
  /* <div class="flip">
<div class="wrapper">
    <div class="card front-face">
      <img src="images/img6.jpg" alt="">
    </div>
    <div class="card back-face">
      <img src="images/img5.jpg" alt="">
      <div class="info">
        <div class="title">My title</div>
        <p>Senior Frontend Engineer</p>
      </div>
      <ul>
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-youtube"></i></a>
      </ul>
    </div>
  </div>
</div> */
}
