import React, { Component } from "react";
import "../css/reset.css";
import "../css/App.css";
import Event from "../components/Event";
import Nav from "../components/Nav";
import AddEvent from "../components/AddEvent";
import NotFound from "../components/NotFound";
import { Route, Switch } from "react-router-dom";
import EditEvent from "../components/EditEvent";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { events: {}, active: null };
  // }

  componentDidMount = () => {
    fetch("../data/events.json")
      .then(r => r.json())
      .then(this.parseData);
  };

  parseData = data => {
    this.setState({ events: data });
  };

  // handleRemoveEvent = id => {
  //   const events = { ...this.state.events };
  //   delete events[id];
  //   this.setState({ events, active: null });
  // };

  // handleChangeEvent = id => {
  //   this.setState({ active: id });
  //   console.log("set to active ", id);
  // };

  // handleChangeItem = (id, event) => {
  //   const { events } = this.state;
  //   const updateEvents = { ...events };
  //   updateEvents[id] = event;
  //   this.setState({ events: updateEvents });
  // };

  // handleSubmitEdit = (id) => {
  //   this.setState({ active: null });
  // };

  render() {
    // const { events, active } = this.state;
    const { store } = this.props;
    return <div className="app">
        <Nav title="Eventory" store= {store} />
        {/* {active ? <EditEvent id={active} event={events[active]} onSubmit={this.handleSubmitEdit} onChange={(id, updateEvent) => this.handleChangeItem(id, updateEvent)} /> : ""} */}
        <Switch>
          <Route path="/" exact render={() => <div className="events">
                {store.events.map(event => (
                  <div className="events" key={event.id}>
                    <Event event={event} />
                    <EditEvent event={event} />
                  </div>
                ))}
              </div>} />
          <Route path="/event/add"  render={() => <AddEvent onAdd={store.handleAddEvent} />} />
          <Route component={NotFound} />
        </Switch>
      </div>;
  }
}

export default App;
