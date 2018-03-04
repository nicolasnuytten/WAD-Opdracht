import React from "react";
import PropTypes from "prop-types";

const Event = ({name, text, money, date}) => {
  return (
    <div className="event">
      <div className="event-top">
        <p className="event-name">{name}</p>
      </div>
      <div className="event-info">
        <div className="event-tags">
          <p className="event-date event-tag">{date}</p>
          <p className="event-money event-tag">± €{money}</p>
        </div>
        <div className="event-text">
          <p className="event-text-text">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Event;
