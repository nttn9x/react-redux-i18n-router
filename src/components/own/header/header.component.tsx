import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation("common");
  const keyLang = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      {t("language")}
      <button
        style={{ color: keyLang === "vi" ? "red" : "" }}
        onClick={() => changeLanguage("vi")}
      >
        VI
      </button>
      <button
        style={{ color: keyLang === "en" ? "red" : "" }}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </header>
  );
};

export default Header;
