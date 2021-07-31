import { combineReducers } from "redux";

import productList from "./modules/product-list/product-list.reducer";

const rootReducer = combineReducers({
  productList,
});

export default rootReducer;
