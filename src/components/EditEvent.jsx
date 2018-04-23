import React from "react";
import PropTypes from "prop-types";
import {observer} from "mobx-react"

const EditEvent = ({ event }) => {
  const { name, date, money, text } = event;
  // const handleChange = e => {
  //   const { value, name } = e.currentTarget;
  //   const updateEvent = { ...event };
  //   updateEvent[name] = value;
  //   onChange(id, updateEvent);
  // };

  // const handleSubmit = e => {
  //   onSubmit(id);
  // };

  return <form className="event edit-event">
      <div className="event-top">
        <input value={name} name="name" type="text" className="edit-event-name" onChange={e => event.updateName(e.target.value)} />
      </div>
      <div className="event-info">
        <div className="event-tags">
          <input value={date} name="date" type="date" className="edit-event-date event-tag" onChange={e => event.updateDate(e.target.value)} />
          <select value={money} name="money" className="edit-event-money event-tag" onChange={e => event.updateMoney(e.target.value)}>
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
          <textarea name="text" className="edit-event-text-text" value={text} onChange={e => event.updateText(e.target.value)} />
        </div>
      </div>
    </form>;
};

EditEvent.propTypes = {
  id: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default observer(EditEvent);
