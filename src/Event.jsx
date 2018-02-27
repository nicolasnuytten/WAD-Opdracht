import React from "react";

const Event = ({ name, dateStart, dateEnd, money }) => (
  <div className="event">
    <p className="event-name">{name}</p>
    <p className="event-date">Date: {dateStart} - {dateEnd} </p>
    <p className="event-money">Money spend: €{money}</p>
  </div>
);

export default Event;
