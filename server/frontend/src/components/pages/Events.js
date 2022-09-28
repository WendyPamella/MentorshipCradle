import React from "react";
import "../Event.css";
import Event from "../Event.js"
function Events() {
  return (
    <div>
      <h1 className="feartured__h1">Featured Events</h1>
      <div className="events__row">
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  );
}

export default Events;