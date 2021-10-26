import { ActionTypes } from "../constants/action-types";

export const allProductsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_ALL_PRODUCTS:
      return [...payload];

    default:
      return state;
  }
};
