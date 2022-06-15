// types
import { SET_MODAL } from "../types";

const initialState = {
  isActive: false,
  type: null,
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        ...state,
        isActive: action.payload.status,
        type: action.payload.type ? action.payload.type : state.type,
      };
    default:
      return state;
  }
};

export default modal;
