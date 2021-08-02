import React from "react";
import styles from "./header.module.scss";

import { AppBar, Toolbar, Typography } from "components/libraries";

import Settings from "./header-settings.componen";

const Header = () => {
  return (
    <AppBar classes={{ root: styles.header }} position="static">
      <Toolbar variant="dense">
        <Typography classes={{ root: styles.title }} variant="h6">
          Kitty
        </Typography>
        <Settings />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
