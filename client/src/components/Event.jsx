import React from "react";
import { observer } from "mobx-react"
import REMOVE_EVENT from "../graphql/removeEvent";
import GET_ALL_EVENTS from "../graphql/getAllEvents";
import { Mutation } from "react-apollo";

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

  return <Mutation mutation={REMOVE_EVENT} update={(cache, { data: { removeEvent } }) => {
    const data = cache.readQuery({ query: GET_ALL_EVENTS });
    data.allEvents.remove(removeEvent);
    cache.writeQuery({ query: GET_ALL_EVENTS, data });
  }}>
    {removeEvent => <article>
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
      <button onClick={e => removeEvent({ variables: { name: name, date: date, money: money, text: text } })}>X</button>
    <div />
  </article>
  }
  </Mutation>;
};


export default observer(Event);
