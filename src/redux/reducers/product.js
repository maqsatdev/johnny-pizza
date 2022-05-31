// types
import { SET_PRODUCTS } from "../types";

const initialState = {
  products: [],
  isLoaded: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default products;
