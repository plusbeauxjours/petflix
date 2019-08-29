import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../Routes/Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Header from "./Header/index";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/tv" exact={true} component={TV} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
