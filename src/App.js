import React, { Component } from "react";
import "./App.css";
import Event from "./Event";
import Nav from "./Nav";

class App extends Component {
  render() {
    return <div className="app">
        <Nav title="🎉 Eventory 🎉" />
        <Event name="Bitterballenfuif" dateStart="25/02/2018" dateEnd="25/02/2018"/>
        <Event name="Tomorrowland" dateStart="28/07/2017" dateEnd="31/07/2017" />
      </div>;
  }
}

export default App;
