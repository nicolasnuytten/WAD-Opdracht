import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Event from "./Event";
import EditEvent from "./EditEvent";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { EventName: "Bump 2017" };
    this.state = { text: "Leukste festival ooit" };
    this.state = { money: "100" };
    this.state = { date: "2017-06-23" };
  }

  handleChange = (inputName, value) => {
    this.setState({ [inputName]: value });
  };

  render() {
    const { EventName, text, money, date } = this.state;
    return <div className="app">
        <Nav title="Eventory" />
        <div className="events">
          <Event name={EventName} text={text} date={date} money={money} />
          <Event name={EventName} text={text} date={date} money={money} />
          <EditEvent name={EventName} text={text} money={money} date={date} onChange={(inputName, value) => this.handleChange(inputName, value)} />
        </div>
      </div>;
  }
}

export default App;
