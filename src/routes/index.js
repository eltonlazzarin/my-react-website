import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio-website" component={Home} />
        <Route exact path="/portfolio-website/about" component={About} />
        <Route
          exact
          path="/portfolio-website/portfolio"
          component={Portfolio}
        />
      </Switch>
    </BrowserRouter>
  );
}
