import React, { Component } from "react";
import "./App.css";
import Hallo from "./Hallo";
import Order from "./Order";

class App extends Component {
  render() {
    return (
      <div>
        <Hallo naam="Nicolas" groep="2DEV4" />
        <Order />
      </div>
    );
  }
}

export default App;
