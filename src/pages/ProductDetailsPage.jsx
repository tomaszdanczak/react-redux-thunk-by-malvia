import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../redux/actions/selectedProductActions";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const featchProductDetails = async () => {
    const { data } = await axios.get(
      `http://fakestoreapi.com/products/${productId}`
    );

    dispatch(setSelectedProduct(data));
  };

  useEffect(() => {
    featchProductDetails();
  }, [productId]);

  return <div>ProductDetailsPage</div>;
}
