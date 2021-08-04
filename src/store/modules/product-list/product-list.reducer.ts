import produce from "immer";

import { Actions, IProductListState, Types } from "./product-list.constant";

const initialState: IProductListState = {
  data: [],
  firstLoad: true,
  loading: true,
  params: {
    page: 0,
    limit: 20,
    search: "",
  },
};

const reducer = produce((draft: any, action: Actions) => {
  switch (action.type) {
    //step3
    case Types.LOAD_PRODUCTS:
      draft.loading = true;
      break;
    case Types.SET_PRODUCTS:
      // step 6
      draft.data = action.payload.products;
      draft.loading = false;
      draft.firstLoad = false;
      break;
    case Types.ADD_PRODUCT:
      draft.data.push(action.payload.data);
      break;
  }
}, initialState);

export { initialState, reducer as default };
