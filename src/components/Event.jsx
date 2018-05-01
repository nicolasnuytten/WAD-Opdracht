import React from "react";
import PropTypes from "prop-types";
import {observer } from "mobx-react"

const Event = ({ event }) => {

  const { name, date, money, text, removeEvent } = event;

  return <div className="event">
      <div className="event-top">
        <p className="event-name">{name}</p>
      </div>
      <div className="event-info">
        <div className="event-tags">
          <p className="event-date event-tag">{date}</p>
          <p className="event-money event-tag">± €{money}</p>
        </div>
        <div className="event-text">
          <p className="event-text-text">{text}</p>
        </div>
      </div>
      <div>
        <button onClick={removeEvent}>x</button>
      </div>
    </div>;
};

Event.propTypes = {
  event: PropTypes.object.isRequired
};

export default observer(Event);
