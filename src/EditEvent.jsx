import React from "react";
import PropTypes from "prop-types";

const EditEvent = ({ id, event, onChange, onSubmit }) => {
  const handleChange = e => {
    const { value, name } = e.currentTarget;
    const updateEvent = { ...event };
    updateEvent[name] = value;
    onChange(id, updateEvent);
  };

  const handleSubmit = e => {
    onSubmit(id)
  }

  return <form className="event edit-event" onSubmit={handleSubmit}>
      <div className="event-top">
        <input value={event.name} name="name" type="text" className="edit-event-name" onChange={handleChange} />
      </div>
      <div className="event-info">
        <div className="event-tags">
          <input value={event.date} name="date" type="date" className="edit-event-date event-tag" onChange={handleChange} />
          <select value={event.money} name="money" className="edit-event-money event-tag" onChange={handleChange}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="event-text">
          <textarea name="text" className="edit-event-text-text" onChange={handleChange} value={event.text} />
        </div>
      </div>
      <button>Done</button>
    </form>;
};

EditEvent.propTypes = {
  id: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EditEvent;
