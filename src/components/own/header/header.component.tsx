import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./header.module.scss";

import { AppBar, Button, Toolbar, Typography } from "components/libraries";

import Settings from "./header-settings.componen";
import { ROUTES } from "app-constants";

const Header = () => {
  const { t } = useTranslation("navBar");

  return (
    <AppBar classes={{ root: styles.header }} position="static">
      <Toolbar variant="dense">
        <Typography classes={{ root: styles.title }} variant="h6">
          Kitty
        </Typography>
        <div className={styles.links}>
          <Link to={ROUTES.DashBoard}>
            <Button>{t("dashBoard")}</Button>
          </Link>
          <Link to={ROUTES.Product}>
            <Button>{t("product")}</Button>
          </Link>
        </div>
        <Settings />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
