import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const fetchSelectedProduct = (productId) => async (dispatch) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );

  dispatch({
    type: ActionTypes.FETCH_SELECTED_PRODUCT,
    payload: data,
  });
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
