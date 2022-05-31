import { combineReducers } from "redux";
// reducers
import products from "./product";
import categories from "./category";

const rootReducer = combineReducers({
  products,
  categories,
});

export default rootReducer;
