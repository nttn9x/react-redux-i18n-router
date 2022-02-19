import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Provider } from "react-redux";

import { Login, DashBoard, Product } from "pages";
import { ROUTES } from "app-constants";
import { PageLoading } from "components/own";
import AuthContext from "context/auth.context";

import store from "store";

import AuthRoute from "./auth.route";

const Root = () => {
  return (
    <Provider store={store}>
      <AuthContext>
        <BrowserRouter>
          <React.Suspense fallback={<PageLoading />}>
            <Routes>
              <Route path="/auth" element={<AuthRoute />}>
                <Route path={ROUTES.DashBoard} element={<DashBoard />} />
                <Route path={ROUTES.Product} element={<Product />} />

                <Route
                  path="*"
                  element={<Navigate to={ROUTES.DashBoard} replace />}
                />
              </Route>
              <Route path={ROUTES.Login} element={<Login />} />

              <Route
                path="*"
                element={<Navigate to={ROUTES.Login} replace />}
              />
            </Routes>
          </React.Suspense>
        </BrowserRouter>
      </AuthContext>
    </Provider>
  );
};

export default Root;
