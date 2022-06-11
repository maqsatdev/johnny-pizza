// types
import { SET_MODAL } from "../types";

const initialState = {
  isActive: false,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return { ...state, isActive: action.payload };
    default:
      return state;
  }
};

export default modal;
