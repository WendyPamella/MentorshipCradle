import React from "react";

const Spotlight = ({name, text, image, location}) => {
    return(
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
    )
}

export default Spotlight;

{/* <div class="sliding-col">
                        <div class="user-text">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <h3>Chike Agnes</h3>
                            <p>Zumi Africa</p>

                        </div>
                        <div class="user-img">
                            <img src="images/img1.jpg" alt="" >

                        </div>
                    </div> */}
