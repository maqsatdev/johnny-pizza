import instance from "../../api/instance";

//types
import { SET_CATEGORIES } from "../types";

export const fetchCategories = () => (dispatch) => {
  instance.get("categories").then(({ data }) => {
    dispatch(setCategories(data));
  });
};

export const setCategories = (items) => ({
  type: SET_CATEGORIES,
  payload: items,
});
