import React from "react";
import PropTypes from "prop-types";

const EditEvent = (props) => {
  const handleChange = e => {
    const value = e.target.value;
    const inputName = e.target.name;
    props.onChange(inputName, value);
  };

  return <div className="event edit-event">
      <div className="event-top">
        <input value={props.name} name="EventName" type="text" className="edit-event-name" onChange={handleChange} />
      </div>
      <div className="event-info">
        <div className="event-tags">
          <input name="date" type="date" className="edit-event-date event-tag" onChange={handleChange} value={props.date} />
          <select name="money" className="edit-event-money event-tag" onChange={handleChange} value={props.money}>
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
          <textarea name="text" className="edit-event-text-text" onChange={handleChange} value={props.text} />
        </div>
      </div>
    </div>;
};

EditEvent.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default EditEvent;
