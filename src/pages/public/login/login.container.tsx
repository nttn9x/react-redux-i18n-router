import styles from "./login.module.scss";

import { useTranslation } from "react-i18next";
import classnames from "classnames";

import { TextField } from "components/libraries";

import useLoginHook from "./login.hook";

const Login = () => {
  const { t } = useTranslation(["common", "action"]);
  const { handleChange, doLogin } = useLoginHook();

  return (
    <div className="d-flex h-100 align-items-center justify-content-center">
      <div className={classnames("d-flex flex-column", styles.form)}>
        <TextField
          onChange={handleChange("email")}
          variant="outlined"
          label={t("email")}
        />
        <TextField
          onChange={handleChange("password")}
          variant="outlined"
          label={t("password")}
        />
        <button onClick={doLogin}>{t("action:login")}</button>
      </div>
    </div>
  );
};

export default Login;
