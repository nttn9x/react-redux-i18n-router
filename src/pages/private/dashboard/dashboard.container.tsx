import React from "react";
import { useTranslation } from "react-i18next";

const DashBoard = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      This is dashboard
      <h1>{t("welcome")}</h1>
    </div>
  );
};

export default DashBoard;
