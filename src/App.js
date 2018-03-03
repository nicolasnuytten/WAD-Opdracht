import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Event from "./Event";
import EditEvent from "./EditEvent";
import Nav from "./Nav";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({name: "Event name"});
    this.state = ({ text: "Event description" });
  }

  handleChange = (name, text) => {
    this.handleChangeName(name);
    this.handleChangeText(text);
  }

  handleChangeName = (name) => {
    console.log("name in App:", name);
    this.setState({name: name });
  };

  handleChangeText = (text) => {
    console.log("text in App:", text);
    this.setState({text: text });
  };

  render() {
    const {name, text} = this.state
    return <div className="app">
        <Nav title="Eventory" />
        <div className="events">
          <Event name={name} text={text} dateStart="28/07/2017" money="100" />
          <EditEvent name={name} text={text} onChange={((name, text) => this.handleChange(name, text))}/>
        </div>
      </div>;
  }
}

export default App;
