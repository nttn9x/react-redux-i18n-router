import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadProducts } from "store/modules/product-list/product-list.action";
import { loadingSelector } from "store/modules/product-list/product-list.selector";

const useProductHook = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  return { loading };
};

export default useProductHook;
