import React from "react";
import { useNavigate } from "react-router";

import { ROUTES } from "app-constants";
import { useAuth } from "context/auth.context";

import { login as loginApi } from "services/auth.service";

interface IState {
  email: string;
  password: string;
  loading: boolean;
}

const useLoginHook = () => {
  const { updateUser } = useAuth();
  console.log("Nguyen", updateUser);
  const navigate = useNavigate();

  const [values, setValues] = React.useState<IState>({
    email: "",
    password: "",
    loading: false,
  });

  const handleChange =
    (prop: keyof IState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const doLogin = async () => {
    try {
      const data = await loginApi({
        email: values.email,
        password: values.password,
      });
      updateUser(data);

      navigate(ROUTES.DashBoard, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return { doLogin, values, handleChange };
};

export default useLoginHook;
