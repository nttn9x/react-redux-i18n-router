import { call, put, delay, takeLatest } from "redux-saga/effects";

import { getProducts } from "services/product.service";

import { setProducts } from "./product-list.action";
import { Types, AddProductAction } from "./product-list.constant";

function* watchLoadProducts() {
  // step 5
  const data: any = yield call(getProducts);

  yield delay(2000);

  yield put(setProducts(data.length, data));
}

//@ts-ignore
function* watchAddProduct(action: AddProductAction) {
  if (action.payload.fnCallBack) {
    action.payload.fnCallBack();
  }
}

export default function* root() {
  // step 4
  yield takeLatest(Types.LOAD_PRODUCTS, watchLoadProducts);
  yield takeLatest(Types.ADD_PRODUCT, watchAddProduct);
}
