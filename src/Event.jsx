import React from "react";

const Event = ({ name, dateStart, dateEnd }) => (
  <div className="event">
    <p>Event: {name}</p>
    <p>Start: {dateStart} </p>
    <p>End: {dateEnd} </p>
  </div>
);

export default Event;
