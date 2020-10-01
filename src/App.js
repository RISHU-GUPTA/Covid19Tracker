import React, { Component } from "react";
import Main from "./components/Main";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import India from "./components/India";
import District from "./components/District";

export default class App extends Component {
  render() {
    const Cartdesc = ({ match }) => {
      return <District state={match.params.state} />;
    };

    return (
      <Switch>
        <Route path="/home" component={Main} />
        <Route exact path="/india" component={India} />
        <Route path="/india/:state" component={Cartdesc} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}
