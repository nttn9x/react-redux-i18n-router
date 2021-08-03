import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "services/product.service";
import { setProducts } from "./product-list.action";
import { Types, AddProductAction } from "./product-list.constant";

function* watchLoadProducts() {
  const data: any = yield call(getProducts);

  yield put(setProducts(data.length, data));
}

function* watchAddProduct(action: AddProductAction) {
  if (action.payload.fnCallBack) {
    action.payload.fnCallBack();
  }
}

export default function* root() {
  yield takeLatest(Types.LOAD_PRODUCTS, watchLoadProducts);
  yield takeLatest(Types.ADD_PRODUCT, watchAddProduct);
}
