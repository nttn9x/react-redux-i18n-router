import { lazy } from "react";

const Product = lazy(() => import("./product.container"));

export { Product };
