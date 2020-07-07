import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "src/components/views/Home";
import Account from "src/components/views/Account";
import Login from "src/components/views/Login";
import Signup from "src/components/views/Signup";

import userReducer from "src/reducers/user";

const store = createStore(userReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/account">
            <Account />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
