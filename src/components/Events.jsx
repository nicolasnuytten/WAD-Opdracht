import React from "react";
import Event from "./Event";
import PropTypes from "prop-types";

const Events = ({ store }) => {
  const { events } = store;
  return <ul className="events">
      {Object.keys(events).map(id => (
        <Event key={id} id={id} event={events[id]} />
      ))}
    </ul>;
};

Events.propTypes = {
  events: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Events;
