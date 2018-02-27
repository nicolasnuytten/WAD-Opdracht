import React, { Component } from "react";
import "./reset.css";
import "./App.css";
import Event from "./Event";
import Nav from "./Nav";

class App extends Component {
  render() {
    return <div className="app">
        <Nav title="Eventory" />
        <Event name="Bitterballenfuif" dateStart="25/02/2018" dateEnd="25/02/2018" money="20"/>
        <Event name="Tomorrowland" dateStart="28/07/2017" dateEnd="31/07/2017" money="100" />
      </div>;
  }
}

export default App;
