import {
  Types,
  SetProductsAction,
  LoadProductsAction,
} from "./product-list.constant";

export function setProducts(count: number, products: any[]): SetProductsAction {
  return { type: Types.SET_PRODUCTS, payload: { count, products } };
}

export function loadProducts(): LoadProductsAction {
  return { type: Types.LOAD_PRODUCTS };
}
