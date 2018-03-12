import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Event from "./Event";
import EditEvent from "./EditEvent";
import Nav from "./Nav";

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

  handleChangeItem = e => {
    const events = { ...this.state.events };
    const { active } = this.state;
    const { value } = e.currentTarget;
    events[active] = { value };
    this.setState({ events });
  };

  handleAddEvent = () => {
    const events = { ...this.state.events };
    const id = Math.random()
      .toString(16)
      .substr(3, 5);
    events[id] = { value: id };
    this.setState({ events });
  };

  render() {
    const { events, active } = this.state;
    return (
      <div className="app">
        <Nav title="Eventory" onAdd={id => this.handleAddEvent(id)} />
        {active ? (
          <EditEvent
            value={events[active].value}
            onChange={this.handleChangeItem}
          />
        ) : (
          ""
        )}
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
      </div>
    );
  }
}

export default App;
