import React from "react";
import { observer } from "mobx-react"
import DELETE_EVENT from "../graphql/deleteEvent";
import GET_ALL_EVENTS from "../graphql/getAllEvents";
import { Mutation } from "react-apollo";

const Event = ({ history, event }) => {

  const { name, date, money, text } = event;

  return <Mutation mutation={DELETE_EVENT} update={(cache, { data: { deletedEvent } }) => {
    const data = cache.readQuery({ query: GET_ALL_EVENTS });
    data.allEvents = data.allEvents.filter(deleteEvent => deleteEvent._id !== event._id);
    console.log(data.allEvents);
    cache.writeQuery({ query: GET_ALL_EVENTS, data });
  }}>
      {delEvent => <article>
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
          {/* {console.log(event._id)} */}
      <button onClick={e => delEvent({ variables: { id: event._id } })}>X</button>
          <button onClick={e => event.changeActive(event)}>Change</button>
        </article>}
    </Mutation>;
};


export default observer(Event);
