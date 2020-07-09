import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

import Home from "src/components/views/Home";
import Account from "src/components/views/Account";
import Login from "src/components/views/Login";
import Signup from "src/components/views/Signup";
import NewWorkout from "src/components/views/NewWorkout";

import Route from "src/components/base/Route";

import userReducer from "src/reducers/user";

import "./index.css";

const store = createStore(userReducer, applyMiddleware(thunk));

//TODO: understand why navigating w/ URL resets redux state (including auth state) and boots back to /login

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          {/* PRIVATE ROUTES: */}
          <Route path="/" exact isPrivate>
            <Home />
          </Route>
          <Route path="/account" isPrivate>
            <Account />
          </Route>
          <Route path="/new-workout" isPrivate>
            <NewWorkout />
          </Route>
        </Switch>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
