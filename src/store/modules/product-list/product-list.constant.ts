export interface IProductListState {
  firstLoad?: boolean;
  loading?: boolean;
  data?: any;
  params?: any;
}

export enum Types {
  ADD_PRODUCT = "[PRODUCT LIST] ADD_PRODUCT",
  SET_PRODUCTS = "[PRODUCT LIST] SET_PRODUCTS",
  LOAD_PRODUCTS = "[PRODUCT LIST] LOAD_PRODUCTS",
}

export interface AddProductAction {
  type: typeof Types.ADD_PRODUCT;
  payload: { data: string; fnCallBack?: Function };
}

export interface LoadProductsAction {
  type: typeof Types.LOAD_PRODUCTS;
}

export interface SetProductsAction {
  type: typeof Types.SET_PRODUCTS;
  payload: { products: any[]; count: number };
}

export type Actions = AddProductAction | SetProductsAction | LoadProductsAction;
