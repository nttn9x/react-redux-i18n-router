import {
  Types,
  SetProductsAction,
  LoadProductsAction,
  AddProductAction,
} from "./product-list.constant";

export function setProducts(count: number, products: any[]): SetProductsAction {
  return { type: Types.SET_PRODUCTS, payload: { count, products } };
}

export function loadProducts(): LoadProductsAction {
  // step2
  return { type: Types.LOAD_PRODUCTS };
}

export function addProduct(
  data: string,
  fnCallBack: Function
): AddProductAction {
  return { type: Types.ADD_PRODUCT, payload: { data, fnCallBack } };
}
