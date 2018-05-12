import React from "react";
import Event from "./Event";
import EditEvent from "../components/EditEvent";
import { observer } from "mobx-react";
import ProtectedComponent from "./ProtectedComponent";

const Events = ({ events }) => {
    return (<ProtectedComponent protect={<ul className="events">
        {events.map(event => 
        <div className="event" key={event._id}>
            <Event event={event} key={event._id} />
            <EditEvent event={event} />
          </div>
        )}
      </ul>
    }
    alternative={
        <p className="signin-message">Sign in to see the events!</p>
    }
    />)
};

export default observer(Events);
