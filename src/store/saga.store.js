import {all} from 'redux-saga/effects';

import watchProductList from './modules/product-list/product-list.saga';

export default function* root() {
  yield all([
    watchProductList(),
  ]);
}
