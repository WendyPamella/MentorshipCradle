import React from "react";

function Event({event}) {
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
        <h3>{event.date}</h3>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <h4>{event.location}</h4>

        <button className="btn__event">RSVP</button>
      </div>
    </div>
  );
}

export default Event;