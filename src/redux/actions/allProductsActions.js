import { ActionTypes } from "../constants/action-types";

export const setAllProducts = (products) => {
  return {
    type: ActionTypes.SET_ALL_PRODUCTS,
    payload: products,
  };
};
