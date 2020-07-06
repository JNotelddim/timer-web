import React from "react";
import ReactDOM from "react-dom";

import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "./components/views/Home"; //TODO: figure out why module resolution isn't working from tsconfig
import Account from "./components/views/Account";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/login">Login</Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
