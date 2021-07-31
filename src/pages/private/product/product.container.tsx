import React from "react";
import { Link } from "react-router-dom";

import { ROUTES } from "app-constants";
import useProductHook from "./product.hook";

import Loading from "./product-loading.component";
import ListData from "./product-list.component";

const Product = () => {
  const { loading } = useProductHook();

  return (
    <div>
      This is Product
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
