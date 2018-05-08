import React from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import ADD_EVENT from "../graphql/addEvent";
import GET_ALL_EVENTS from "../graphql/getAllEvents";
import { Mutation } from "react-apollo";

const AddEvent = ({ history }) => {

  return <Mutation mutation={ADD_EVENT} update={(cache, { data: { addEvent } }) => {
    const data = cache.readQuery({ query: GET_ALL_EVENTS });
    data.allEvents.push(addEvent);
    cache.writeQuery({ query: GET_ALL_EVENTS, data });
      }}>
      {addEvent => <form className="add-form" onSubmit={e => {
            e.preventDefault();
            const form = e.currentTarget;
            if (form.name.value) {
              addEvent({ variables: { name: form.name.value, date: form.date.value, money: form.money.value, text: form.text.value } });
              history.push(`/`);
              // form.reset();
            }
          }}>
          <div className="event-tags">
            <label id="name">Event Name:</label>
            <input name="name" type="text" />
          </div>
          <div className="event-tags">
            <label id="date">Date:</label>
            <input name="date" type="date" />
          </div>
          <div className="event-tags">
            <label id="money">Money:</label>
            <select name="money" className="edit-event-money event-tag">
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
            </select>
          </div>
          <div className="event-tags">
            <label id="money">Description:</label>
            <textarea name="text" />
          </div>

          <input className="button" type="submit" value="Submit" />
        </form>}
    </Mutation>;
};

AddEvent.propTypes =  {
  onAddEvent: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(observer(AddEvent));
