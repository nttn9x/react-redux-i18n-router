import { ROUTES } from "app-constants";
import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { useAuth } from "context/auth.context";

const Login = () => {
  const { updateUser } = useAuth();
  const history = useHistory();
  const { t } = useTranslation("common");

  const login = () => {
    localStorage.setItem("nttn9x", "asdasd");
    history.push(ROUTES.DashBoard);
    updateUser("asdas");
  };

  return (
    <div>
      This is login
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;
