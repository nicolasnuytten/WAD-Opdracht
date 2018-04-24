import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

let inputName = null;
let inputDate = null;
let inputMoney = null;
let inputText = null;

const AddEvent = ({ events, onAdd }) => {
  
  const handleAddItem = e => {
    e.preventDefault();
    if ((inputName.value && inputDate.value && inputMoney.value && inputText.value)){
      onAdd(inputName.value, inputDate.value, inputMoney.value, inputText.value);
      e.currentTarget.reset();
    }
  };

  return (
    <form className="add-form" onSubmit={handleAddItem}>
      <div className="event-tags">
        <label id="name">Event Name:</label>
        <input name="name" type="text" ref={field => (inputName = field)} />
      </div>
      <div className="event-tags">
        <label id="date">Date:</label>
        <input name="date" type="date" ref={field => (inputDate = field)} />
      </div>
      <div className="event-tags">
        <label id="money">Money:</label>
        <select
          name="money"
          className="edit-event-money event-tag"
          ref={field => (inputMoney = field)}
        >
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
      <div className="event-tags">
        <label id="money">Description:</label>
        <textarea name="text" ref={field => (inputText = field)} />
      </div>

      <button>Toevoegen</button>
    </form>
  );
};

AddEvent.propTypes = {
  events: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired
};


export default observer(AddEvent);
