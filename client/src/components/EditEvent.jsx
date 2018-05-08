import React from "react";
import { observer } from "mobx-react"
import UPDATE_EVENT from "../graphql/updateEvent";
import GET_ALL_EVENTS from "../graphql/getAllEvents";
import { Mutation } from "react-apollo";


const EditEvent = ({ event }) => {
  const { name, date, money, text } = event;

  const handleLog = (e) => {
    console.log(e.currentTarget.value);
  }

  return <Mutation mutation={UPDATE_EVENT} update={(cache, { data: { updateEvent } }) => {
        const data = cache.readQuery({ query: GET_ALL_EVENTS });
        data.allEvents.push(updateEvent);
        cache.writeQuery({ query: GET_ALL_EVENTS, data });
      }}>
      {updateEvent => <form className="event edit-event" onSubmit={e => {
            e.preventDefault();
            const form = e.currentTarget;
            console.log(form);
            if (form.name.value && form.date.value && form.money.value) {
              updateEvent({
                variables: {
                  id: event._id,
                  name: form.name.value,
                  date: form.date.value,
                  money: form.money.value,
                  text: form.text.value
                }
              });
            }
          }}>
          <div className="event-top">
            <input value={name} name="name" type="text" className="edit-event-name" onChange={e => handleLog} />
          </div>
          <div className="event-info">
            <div className="event-tags">
              <input value={date} name="date" type="date" className="edit-event-date event-tag" // onChange={e => event.updateDate(e.target.value)}
                onChange={e => handleLog} />
          <input value={money} type="number" list="prices" name="money" className="edit-event-money event-tag" onChange={e => handleLog} />

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
          </div>
          <div className="event-text">
        <textarea name="text" className="edit-event-text-text" value={text} onChange={e => handleLog}/>
          </div>
          <input className="button" type="submit" value="Submit" />
        </form>}
    </Mutation>;
};

export default observer(EditEvent);
