import React from "react";
import Event from "./Event";
import EditEvent from "../components/EditEvent";
import { observer } from "mobx-react";

const Events = ({ events }) => {
    return <ul className="events">
        {events.map(event => <div className="event" key={event._id}>
            {/* {console.log(event._id)} */}
            <Event event={event} key={event._id} />
            <EditEvent event={event} />
          </div>)}
      </ul>;
};

export default observer(Events);
