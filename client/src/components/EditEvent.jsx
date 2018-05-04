import React from "react";
import { observer } from "mobx-react"

const EditEvent = ({ event, store }) => {
  const { name, date, money, text } = event;

  return <form className="event edit-event">
    <div className="event-top">
      <input value={name} name="name" type="text" className="edit-event-name" onChange={e => event.updateName(e.target.value)} />
    </div>
    <div className="event-info">
      <div className="event-tags">
        <input value={date} name="date" type="date" className="edit-event-date event-tag" onChange={e => event.updateDate(e.target.value)} />
        <input value={money} type="number" list="prices" name="money" className="edit-event-money event-tag" onChange={e => event.updateMoney(e.target.value)} />
        <datalist id="prices">
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
        </datalist>
      </div>
      <div className="event-text">
        <textarea name="text" className="edit-event-text-text" value={text} onChange={e => event.updateText(e.target.value)} />
      </div>
    </div>
  </form>;
};

export default observer(EditEvent);
