import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";

import { DashBoard, Product, Login } from "pages";
import { Header } from "components/own";
import ThemeContext from "context/theme.context";
import AuthContext from "context/auth.context";
import { ROUTES } from "app-constants";
import store from "store";

import AuthRoute from "./auth.route";

const Root = () => {
  return (
    <Provider store={store}>
      <AuthContext>
        <ThemeContext>
          <Router>
            <React.Suspense fallback={<div>loading</div>}>
              <Switch>
                <AuthRoute path="/auth">
                  <Header />
                  <Switch>
                    <Route exact path={ROUTES.DashBoard}>
                      <DashBoard />
                    </Route>
                    <Route path={ROUTES.Product}>
                      <Product />
                    </Route>
                    <Redirect from="/auth" to={ROUTES.DashBoard} />
                  </Switch>
                </AuthRoute>
                <Route path={ROUTES.Login}>
                  <Login />
                </Route>
                <Redirect exact from="/" to={"/auth"} />
              </Switch>
            </React.Suspense>
          </Router>
        </ThemeContext>
      </AuthContext>
    </Provider>
  );
};

export default Root;
