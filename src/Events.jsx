import React from "react";
import Event from "./Event";
import PropTypes from "prop-types";

const Events = ({ events, onRemove, onChange }) => {
  return <ul className="events">
      {Object.keys(events).map(id => (
        <Event
          id={id}
          event={events[id]}
          onRemove={onRemove}
          onChange={onChange}
        />
      ))}
    </ul>;
};

Events.propTypes = {
  events: PropTypes.object.isRequired,
};

export default Events;
