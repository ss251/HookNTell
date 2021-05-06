import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "../profile/Profile";

const SpecialRoute = (props) => {
  return (
    <section className="container-profile">
      <Alert />
      <Switch>
        <Route exact path="/profile/:id" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default SpecialRoute;
