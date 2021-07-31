import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const { t } = useTranslation("common");

  return (
    <div>
      This is dashboard
      <h1>{t("welcome")}</h1>
      <br />
      <Link to={"/product"}>Go to product</Link>
    </div>
  );
};

export default DashBoard;
