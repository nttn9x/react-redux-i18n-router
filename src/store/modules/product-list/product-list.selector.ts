import { createSelector } from "reselect";

import { IState } from "../../constant.store";
import { IProductListState } from "./product-list.constant";

export const productListSelector = (state: IState) => {
  return state.productList;
};

export const loadingSelector = createSelector(
  productListSelector,
  (productList: IProductListState): any => productList.loading
);

export const dataSelector = createSelector(
  productListSelector,
  (productList: IProductListState): any => {
    return productList.data;
  }
);
