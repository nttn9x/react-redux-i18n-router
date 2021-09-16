import React from "react";
import { ROUTES } from "app-constants";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { useAuth } from "context/auth.context";

const Login = () => {
  const { updateUser } = useAuth();
  const history = useHistory();
  const { t } = useTranslation("common");

  const login = () => {
    updateUser("asdas");

    history.push(ROUTES.DashBoard);
  };

  return (
    <div>
      This is login
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
