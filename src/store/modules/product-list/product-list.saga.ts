import { delay, put, takeLatest } from "redux-saga/effects";
import { setProducts } from "./product-list.action";
import { Types } from "./product-list.constant";

function* watchLoadProducts() {
  let data = ["Item 1", "Item 2"];
  let count = 0;

  yield delay(2000);

  yield put(setProducts(count, data));
}

export default function* root() {
  yield takeLatest(Types.LOAD_PRODUCTS, watchLoadProducts);
}
