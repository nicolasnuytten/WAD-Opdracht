import React from "react";

const AddEvent = ({ events, onAdd }) => {
  const handleAddItem = () => {
    onAdd();
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.currentTarget;
    const event = { ...events };
    event[name] = value;
    onAdd(event);
  };

  return (
    <div className="add-form">
      <div className="event-tags">
        <label id="name">Event Name:</label>
        <input name="name" type="text" onChange={e => handleChangeInput(e)} />
      </div>
      <div className="event-tags">
        <label id="date">Date:</label>
        <input name="date" type="date" onChange={e => handleChangeInput(e)} />
      </div>
      <div className="event-tags">
        <label id="money">Money:</label>
        <select
          name="money"
          className="edit-event-money event-tag"
          onChange={e => handleChangeInput(e)}
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
        <textarea name="text" onChange={e => handleChangeInput(e)} />
      </div>

      <button onClick={() => handleAddItem()}>Toevoegen</button>
    </div>
  );
};

export default AddEvent;
