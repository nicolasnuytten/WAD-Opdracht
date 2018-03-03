import React from "react";
import PropTypes from "prop-types";
// import edit from "./assets/icon/edit.png"

// const handleClickEdit = e => (
//   console.log("edit: ", e.currentTarget)
// );

const Event = props => {
  return (
    <div className="event">
      <div className="event-top">
        <p className="event-name">{props.name}</p>
      </div>
      <div className="event-info">
        <div className="event-tags">
          <p className="event-date event-tag" />
          <p className="event-money event-tag">€</p>
        </div>
        <div className="event-text">
          <p className="event-text-text">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
