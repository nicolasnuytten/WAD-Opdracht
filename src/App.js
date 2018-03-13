import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Event from "./Event";
import EditEvent from "./EditEvent";
import Nav from "./Nav";
import AddEvent from "./AddEvent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: {}, active: null };
  }

  componentDidMount = () => {
    fetch("./data/events.json")
      .then(r => r.json())
      .then(this.parseData);
  };

  parseData = data => {
    console.log("data:", data);
    this.setState({ events: data });
  };

  handleRemoveEvent = id => {
    const events = { ...this.state.events };
    delete events[id];
    this.setState({ events, active: null });
  };

  handleChangeEvent = id => {
    this.setState({ active: id });
  };

  handleChangeItem = (inputName, value) => {
    const events = { ...this.state.events };
    const { active } = this.state;
    console.log(events[active])
    events[active] = {[inputName]: value};
    this.setState({ events });
  };

  handleAddEvent = () => {
    const events = { ...this.state.events };
    const id = Math.random()
      .toString(16)
      .substr(3, 5);
    events[id] = { value: id, name: "event naam", date: "2018-01-01", money: 10, text: "dit is tekst" };
    this.setState({ events });
  }; 

  render() {
    const { events, active } = this.state;
    return <div className="app">
        <Nav title="Eventory" />
        <section className="addEvent">
          <AddEvent event={events} onAdd={id => this.handleAddEvent(id)} />
        </section>
        {active ? <EditEvent events={events} onChange={(inputName, value) => this.handleChangeItem(inputName, value)} /> : ""}
        <div className="events">
          {Object.keys(events).map(id => (
            <Event
              id={id}
              event={events[id]}
              onRemove={id => this.handleRemoveEvent(id)}
              onChange={id => this.handleChangeEvent(id)}
            />
          ))}
        </div>
      </div>;
  }
}

export default App;
