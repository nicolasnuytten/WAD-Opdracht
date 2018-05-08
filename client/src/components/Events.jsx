import React from "react";
import Event from "./Event";
import EditEvent from "../components/EditEvent";
import { observer } from "mobx-react";

const Events = ({ events }) => {
    return <ul className="events">
        {events.map(event => <div className="event" key={event.name}>
            {/* {console.log(event)} */}
            <Event event={event} />
            <EditEvent event={event} />
          </div>)}
      </ul>;
};

export default observer(Events);
