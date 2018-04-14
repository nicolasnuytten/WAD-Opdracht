import React from "react";
import PropTypes from "prop-types";

const Event = ({ id, event, onRemove, onChange }) => {
  const handleRemoveItem = id => {
    onRemove(id);
  };

  const handleChangeItem = id => {
    onChange(id);
  };

  return <div className="event" id={id}>
      <div className="event-top">
        <p className="event-name">{event.name}</p>
      </div>
      <div className="event-info">
        <div className="event-tags">
          <p className="event-date event-tag">{event.date}</p>
          <p className="event-money event-tag">± €{event.money}</p>
        </div>
        <div className="event-text">
          <p className="event-text-text">{event.text}</p>
        </div>
      </div>
      <div>
        <button onClick={() => handleChangeItem(id)}>Aanpassen</button>
        <button onClick={() => handleRemoveItem(id)}>x</button>
      </div>
    </div>;
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
};

export default Event;
