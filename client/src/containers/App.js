import React, { Component } from "react";
import "../css/reset.css";
import "../css/App.css";
import Events from "../components/Events";
import Nav from "../components/Nav";
import AddEvent from "../components/AddEvent";
import NotFound from "../components/NotFound";
import { Route, Switch, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

class App extends Component {

  render() {
    const { store } = this.props;
    return <div className="app">
        <Nav title="Eventory" store={store} />
        <Switch>
          <Route path="/" exact render={() => <Events store={store} />} />
          <Route path="/events/add" render={() => <AddEvent store={store} />} />
          <Route component={NotFound} />
        </Switch>
      </div>;
  }
}

export default withRouter(observer(App));
