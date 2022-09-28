import React from "react";

function Event() {
  return (
    <div className="event">
      <div>
        <img
          src="https://www.kenyabuzz.com/public//uploads/posters/1663826592.jpg"
          alt=""
          srcset=""
        />
      </div>

      <div>
        <h3>23th september 2022</h3>
        <h2>Quiz Night</h2>
        <p>description</p>
        <h4>Nairobi</h4>

        <button className="btn__event">RSVP</button>
      </div>
    </div>
  );
}

export default Event;