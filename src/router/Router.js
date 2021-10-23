import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import SuccessPage from "../pages/SuccessPage/SuccessPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/success" component={SuccessPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
