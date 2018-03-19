import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Events from "./Events";
import EditEvent from "./EditEvent";
import Nav from "./Nav";
import AddEvent from "./AddEvent";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { events: {}, active: null };
  }

  componentDidMount = () => {
    fetch("../data/events.json")
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

  handleChangeItem = (id, event) => {
    const { events } = this.state;
    const updateEvents = { ...events };
    updateEvents[id] = event;
    this.setState({ events: updateEvents });
  };

  handleAddEvent = (inputName, inputDate, inputMoney, inputText) => {
    const events = { ...this.state.events };
    const id = Math.random()
      .toString(16)
      .substr(3, 5);
    events[id] = { name: inputName, date: inputDate, money: inputMoney, text: inputText };
    this.setState({ events });
  }; 

  handleSubmitEdit = (id) => {
    this.setState({ active: null });
  };

  render() {
    const { events, active } = this.state;
    return <div className="app">
        <Nav title="Eventory" />
        {active ? <EditEvent id={active} event={events[active]} onChange={(id, updateEvent) => this.handleChangeItem(id, updateEvent)} onSubmit={id => this.handleSubmitEdit(id)} /> : ""}
        <div className="events" />
        <Switch>
          <Route path="/" exact render={() => <Events events={events} onRemove={id => this.handleRemoveEvent(id)} />} onChange={id => this.handleChangeEvent(id)} />
          <Route path="/event/add" component={AddEvent} />
          <Route component={NotFound} />
        </Switch>
      </div>;
  }
}

export default App;
