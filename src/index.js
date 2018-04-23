import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";

import store from "./store";

ReactDOM.render(
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
