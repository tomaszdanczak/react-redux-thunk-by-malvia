import { combineReducers } from "redux";
import { allProductsReducer } from "./allProductsReducer";
import { selectedProductReducer } from "./selectedProductReducer";

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  selectedProduct: selectedProductReducer,
});

export default rootReducer;
