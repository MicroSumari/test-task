import React from "react";
import Environment from "./components/environment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME_ROUTE, INFO_PAGE_ROUTE } from "./components/pages/routes";

import Home from "./components/pages/Home/Home.js";
import Info from "./components/pages/Info/InfoPage.js";
import PageNotFound from "./components/pages/404/Page404";

export default function App() {
  return (
    <Router>
      <Environment>
        <Switch>
          <Route exact path={HOME_ROUTE} component={Home} />

          <Route path={INFO_PAGE_ROUTE} component={Info} />

          <Route component={PageNotFound} />
        </Switch>
      </Environment>
    </Router>
  );
}
