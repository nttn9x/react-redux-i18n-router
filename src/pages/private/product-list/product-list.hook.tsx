import { useSelector } from "react-redux";
import { dataSelector } from "store/modules/product-list/product-list.selector";

const useProductListHook = () => {
  const data = useSelector(dataSelector);

  return { data };
};

export default useProductListHook;
