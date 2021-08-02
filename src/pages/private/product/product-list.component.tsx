import React from "react";
import styles from "./product-list.module.scss";

import useProductListHook from "./product-list.hook";

const ProductList = () => {
  const { data } = useProductListHook();
  return (
    <div>
      {data.map((d: any, i: number) => (
        <div key={i} className={styles.text}>
          {d}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
