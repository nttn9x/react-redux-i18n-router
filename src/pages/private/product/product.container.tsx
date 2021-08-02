import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ROUTES } from "app-constants";
import useProductHook from "./product.hook";

import Loading from "./product-loading.component";
import ListData from "./product-list.component";

const Product = () => {
  const { t } = useTranslation(["common", "product"]);
  const { loading } = useProductHook();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <h1>{t("product:title")}</h1>
      <br />
      <Link to={ROUTES.DashBoard}>Go to DashBoard</Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      {loading && <Loading />}
      {!loading && <ListData />}
    </div>
  );
};

export default Product;
