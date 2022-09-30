import React from "react";
import Carousel from "react-elastic-carousel";
import './bb.css'
import Spotlight from "./Spotlight";
import sampImg from "../../../assets/Images/img1.jpg";
import sampImg3 from "../../../assets/Images/img3.jpg";
import sampImg4 from "../../../assets/Images/img4.jpg";
import sampImg5 from "../../../assets/Images/img2.jpg";
import sampImg2 from "../../../assets/Images/img5.jpg";
import FlipCard from "./FlipCard";

const MentorSpotlight = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="mentor">
        <h1>mentor spotlight</h1>

        <div className="container">
          <Carousel>
            <Spotlight
              name="chike agnes"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampImg}
            />

            <Spotlight
              name="chike agnes"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampImg3}
            />
            <Spotlight
              name="chike agnes"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampImg4}
            />

            <Spotlight
              name="chike agnes"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampImg5}
            />
          </Carousel>
        </div>
      </div>
      {/* the 3d flip cards */}
      <FlipCard
        image={sampImg2}
        title="my title"
        role="senior frontend engineer"
      />

      <div className="mentor">
        <div className="container">
          <Carousel>
            <Spotlight
              name="chike agnes"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampImg}
            />

            <Spotlight
              name="chike agnes"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampImg3}
            />
            <Spotlight
              name="chike agnes"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampImg4}
            />

            <Spotlight
              name="chike agnes"
              location="zumi africa"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              image={sampImg5}
            />
          </Carousel>
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
