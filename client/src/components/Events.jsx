import React from "react";
import Event from "./Event";
import EditEvent from "../components/EditEvent";

const Events = ({ store }) => {
  const { events } = store;
  return <ul className="events">
      {events.map(event => <div className="events" key={event.id}>
          <Event event={event} />
          <EditEvent event={event} />
        </div>)}
    </ul>;
};

export default Events;
