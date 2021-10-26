import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const fetchAllProducts = () => async (dispatch) => {
  const { data } = await axios.get("https://fakestoreapi.com/products");

  dispatch({
    type: ActionTypes.FETCH_ALL_PRODUCTS,
    payload: data,
  });
};
