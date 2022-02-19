import React from "react";

import { ROUTES } from "app-constants";
import { useAuth } from "context/auth.context";
import { Navigate, useLocation, Outlet } from "react-router-dom";

import { Header } from "components/own";

const AuthRoute = () => {
  const {
    state: { user },
  } = useAuth();
  let location = useLocation();

  if (!user) {
    return <Navigate to={ROUTES.Login} state={{ from: location }} replace />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AuthRoute;
