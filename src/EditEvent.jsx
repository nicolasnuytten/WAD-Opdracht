import React from "react";
import PropTypes from "prop-types";

const EditEvent = props => {
  const handleChangeName = e => {
    const name = e.target.value;
    console.log("name in Slider:", name);
    props.onChange(name);
  };

  const handleChangeText= e => {
    const text = e.target.value;
    console.log("text in Slider:", text);
    props.onChange(text);
  };

  return (
    <div className="event edit-event">
      <div className="event-top">
        <input
          type="text"
          className="edit-event-name"
          onChange={handleChangeName}
          value={props.name}
        />
      </div>
      <div className="event-info">
        <div className="event-tags">
          <input type="date" className="edit-event-date event-tag" />
          <select className="edit-event-money event-tag">
            <option value=">10">10</option>
            <option value="20">20</option>
            <option value="20">30</option>
            <option value="20">40</option>
            <option value="50">50</option>
            <option value="20">60</option>
            <option value="20">70</option>
            <option value="20">80</option>
            <option value="20">90</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="event-text">
          <textarea
            className="edit-event-text-text"
            onChange={handleChangeText}
            value={props.text}
          />
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
