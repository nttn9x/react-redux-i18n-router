import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuth } from "context/auth.context";
import { ROUTES } from "app-constants";

interface IProps {
  children: any;
  path: string;
}

const AuthRoute = ({ children, ...rest }: IProps) => {
  const {
    state: { user },
  } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: ROUTES.Login,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
