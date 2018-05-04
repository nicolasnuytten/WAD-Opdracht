import React from "react";
import { observer } from "mobx-react";

const AddEvent = ({ store }) => {
  
  const { add } = store;

  const handleSubmitForm = e => {
    
    e.preventDefault();
    const form = e.currentTarget;
    if (form.name.value) {
      add(form.name.value, form.date.value, form.money.value, form.text.value);
      form.reset();
    }
  };

  return <form className="add-form" onSubmit={handleSubmitForm}>
      <div className="event-tags">
        <label id="name">Event Name:</label>
        <input name="name" type="text" />
      </div>
      <div className="event-tags">
        <label id="date">Date:</label>
        <input name="date" type="date" />
      </div>
      <div className="event-tags">
        <label id="money">Money:</label>
        <select name="money" className="edit-event-money event-tag">
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
        <textarea name="text" />
      </div>

      <button>Toevoegen</button>
    </form>;
};

export default observer(AddEvent);
