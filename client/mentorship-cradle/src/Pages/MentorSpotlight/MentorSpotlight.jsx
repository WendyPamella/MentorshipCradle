import React from "react";
import Spotlight from "./Spotlight";
import sampImg from "../../Assets/Images/img1.jpg";
import sampImg2 from "../../Assets/Images/img5.jpg";
import Header from "../../Components/Header";
import FlipCard from "./FlipCard";

const MentorSpotlight = () => {
  return (
    <div>
      <Header />
      <div className="mentor">
        <h1>mentor spotlight</h1>

        <div className="container">
          <div class="indicator">
            <span class="btn active"></span>
            <span class="btn"></span>
            <span class="btn"></span>
            <span class="btn"></span>
          </div>

          <Spotlight
            name="chike agnes"
            location="zumi africa"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            image={sampImg}
          />
          {/* I should not go below this line for now */}
        </div>
      </div>
      {/* the 3d flip cards */}
      <FlipCard
            image={sampImg2}
            title="my title"
            role="senior frontend engineer"
          />
    </div>
  );
};

export default MentorSpotlight;
