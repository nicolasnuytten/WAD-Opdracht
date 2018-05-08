import React from "react";
import { observer } from "mobx-react"

const Event = ({ event }) => {

  const { name, date, money, text } = event;
  // const { remove, update } = store;

  const handleRemoveEvent = () => {
    // remove(event)
    console.log("remove", event)
  }

  const handleUpdateEvent = () => {
    // update(event);
    console.log("change", event)
  };

  return <article>
    <div className="event-top">
      <p className="event-name">{name}</p>
    </div>
    <div className="event-info">
      <div className="event-tags">
        <p className="event-date event-tag">{date}</p>
        <p className="event-money event-tag">± €{money}</p>
      </div>
      <div className="event-text">
        <p className="event-text-text">{text}</p>
      </div>
    </div>
    <button onClick={handleUpdateEvent}>Change</button>
    <button onClick={handleRemoveEvent}>X</button>
    <div />
  </article>;
};


export default observer(Event);
