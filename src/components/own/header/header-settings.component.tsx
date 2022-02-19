import React from "react";
import { useTranslation } from "react-i18next";

import { Popover, IconButton, MenuList, MenuItem } from "components/libraries";
import {
  GTranslate as LanguageIcon,
  OutdoorGrill as OutdoorGrillIcon,
} from "components/icons";
import {
  LANGUAGES,
  BROWSER_STORAGE_LANGUAGE,
} from "app-constants/common.constant";
import { setItem } from "utils/browser-storage.util";
import { useAuth } from "context/auth.context";

const HeaderSettings = () => {
  const { i18n } = useTranslation("common");
  const { updateUser } = useAuth();
  const keyLang = i18n.language;
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const showSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const hideSettings = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    updateUser(null);
  };

  const changeLanguage = (lng: string) => () => {
    i18n.changeLanguage(lng);

    setItem(BROWSER_STORAGE_LANGUAGE, lng);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton color="inherit" onClick={onLogout}>
        <OutdoorGrillIcon />
      </IconButton>
      <IconButton color="inherit" onClick={showSettings}>
        <LanguageIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={hideSettings}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuList>
          <MenuItem
            selected={keyLang === LANGUAGES.Vietnamese}
            onClick={changeLanguage(LANGUAGES.Vietnamese)}
          >
            Vietnamese
          </MenuItem>
          <MenuItem
            selected={keyLang === LANGUAGES.English}
            onClick={changeLanguage(LANGUAGES.English)}
          >
            English
          </MenuItem>
        </MenuList>
      </Popover>
    </>
  );
};

export default HeaderSettings;
