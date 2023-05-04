import "./App.css";

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./componenets/auth/Login";
import Register from "./componenets/auth/Register";
import Alerts from "./componenets/layout/Alerts";
import Navbar from "./componenets/layout/Navbar";
import About from "./componenets/pages/About";
import Home from "./componenets/pages/Home";
import AlertState from "./context/alert/AlertState";
import AuthState from "./context/auth/AuthState";
import ContactState from "./context/contacts/ContactState";

function App() {
  return (
    <AuthState>
      {" "}
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
