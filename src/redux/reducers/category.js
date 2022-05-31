// types
import { SET_CATEGORIES } from "../types";

const initialState = {
  categories: [],
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};

export default categories;
