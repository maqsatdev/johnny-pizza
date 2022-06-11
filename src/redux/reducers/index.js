import { combineReducers } from "redux";
// reducers
import modal from "./modal";
import categories from "./category";

const rootReducer = combineReducers({
  modal,
  categories,
});

export default rootReducer;
