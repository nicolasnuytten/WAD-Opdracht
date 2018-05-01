import React from "react";
import Event from "./Event";
import EditEvent from "../components/EditEvent";
import { observer } from "mobx-react";

const Events = ({ store }) => {
  const { events } = store;  
  return <ul className="events">
      {events.map(event => <div className="event" key={event.id}>
          <Event event={event} store={store} />
          { (event.active === true )? <EditEvent event={event}/> : '' }
        </div>)}
    </ul>;
};

export default observer(Events);