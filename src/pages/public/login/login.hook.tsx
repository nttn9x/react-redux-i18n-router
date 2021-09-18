import React from "react";
import { useHistory } from "react-router";

import { ROUTES } from "app-constants";
import { useAuth } from "context/auth.context";

import { login as loginApi } from "services/auth.service";

interface State {
  email: string;
  password: string;
  loading: boolean;
}

const useLoginHook = () => {
  const { updateUser } = useAuth();
  const history = useHistory();

  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    loading: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const doLogin = async () => {
    try {
      const data = await loginApi({
        email: values.email,
        password: values.password,
      });
      updateUser(data);

      history.push(ROUTES.DashBoard);
    } catch (error) {
      console.log(error);
    }
  };

  return { doLogin, values, handleChange };
};

export default useLoginHook;
