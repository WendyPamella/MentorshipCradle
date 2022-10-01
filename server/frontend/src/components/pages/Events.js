import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Event.css";
import Event from "../Event.js"
function Events() {
  const [events, setEvents] = useState([]);

  useEffect(()=>{
    const fetchEvents = async () =>{
      const res = await axios.get(`/events`);
      setEvents(res.data);
    }
    fetchEvents();
  },[])

  return (
    <div>
      <h1 className="feartured__h1">Featured Events</h1>
      <div className="events__row">
      {events.map((event)=>(
       <Event key={event._id} event={event}/>
      ))}
      </div>
    </div>
  );
};

export default Events; 


