import React from "react";
import { observer } from "mobx-react"
import UPDATE_EVENT from "../graphql/updateEvent";
import GET_ALL_EVENTS from "../graphql/getAllEvents";
import { Mutation } from "react-apollo";

const Event = ({ history, event }) => {

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

  return <Mutation mutation={UPDATE_EVENT} update={(cache, { data: { updateEvent } }) => {
        const data = cache.readQuery({ query: GET_ALL_EVENTS });
        data.allEvents.push(updateEvent);
        cache.writeQuery({ query: GET_ALL_EVENTS, data });
      }}>
      {updateEvent => <article>
          <div className="event-top">
            <p className="event-name">{name}</p>
          </div>
          <div className="event-info">
            <div className="event-tags">
              <p className="event-date event-tag">{date}</p>
              <p className="event-money event-tag">± €{money}</p>
            </div>
          </div>
      <div className="event-text">
        <p className="event-text-text">{text}</p>
      </div>
          <div />
          <button onClick={handleRemoveEvent}>X</button>
          <button onClick={e => event.changeActive(event)}>Change</button>
        </article>}
    </Mutation>;
};


export default observer(Event);
