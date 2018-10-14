import React from "react";
// Import Switch and Route.
import { Switch, Route } from "react-router-dom";

//import componenets
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";

export default (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/addinventory" component={Form} />
    <Route
      path="*"
      render={() => (
        <div>
          <h1>404</h1>
        </div>
      )}
    />
  </Switch>
);
