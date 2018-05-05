import React, { Component } from "react";
import "../css/reset.css";
import "../css/App.css";
import Events from "../components/Events";
import Nav from "../components/Nav";
import AddEvent from "../components/AddEvent";
import NotFound from "../components/NotFound";
import { Route, Switch, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import GET_ALL_EVENTS from "../graphql/getAllEvents";

class App extends Component {

  render() {
    const { store } = this.props;
    return <div className="app">
        <Nav title="Eventory" />
        <Query query={GET_ALL_EVENTS}>
          {({ loading, error, data: { allEvents } }) => {
            if (loading) return <p>
                  Loading...
                </p>;
            if (error) return <p>Error: {error.message}</p>;
            return <Switch>
                <Route path="/" exact render={() => <Events events={allEvents} />} />
                {/* <Route path="/events/add" render={() => <AddEvent store={store} />} /> */}
                <Route component={NotFound} />
              </Switch>;
          }}
        </Query>
      </div>;
  }
}

export default withRouter(observer(App));
