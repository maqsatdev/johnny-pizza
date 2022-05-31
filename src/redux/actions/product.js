//types
import { SET_PRODUCTS } from "../types";

export const setProducts = (items) => ({
  type: SET_PRODUCTS,
  payload: items,
});
