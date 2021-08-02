import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { DashBoard, Product } from "pages";
import { Header } from "components/own";
import Theme from "context/theme.context";
import { ROUTES } from "app-constants";
import store from "store";

const Root = () => {
  return (
    <Provider store={store}>
      <Theme>
        <Router>
          <Header />
          <React.Suspense fallback={<div>loading</div>}>
            <Switch>
              <Route exact path={ROUTES.DashBoard}>
                <DashBoard />
              </Route>
              <Route path={ROUTES.Product}>
                <Product />
              </Route>
            </Switch>
          </React.Suspense>
        </Router>
      </Theme>
    </Provider>
  );
};

export default Root;
