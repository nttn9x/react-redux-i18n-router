import React from "react";
import { useTranslation } from "react-i18next";

import { Grid } from "components/libraries";

import ListData from "./product-list.component";
import Loading from "./product-loading.component";

import ProductAdd from "./product-add.component";

import useProductHook from "./product.hook";

const Product = () => {
  const { t } = useTranslation(["common", "product"]);
  const { loading } = useProductHook();

  return (
    <div>
      <h1>{t("product:title")}</h1>
      <br />
      {loading && <Loading />}
      {!loading && (
        <>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ListData />
            </Grid>
            <Grid item xs={6}>
              <ProductAdd />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};

export default Product;
