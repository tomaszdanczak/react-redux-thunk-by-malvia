import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  setSelectedProduct,
} from "../redux/actions/selectedProductActions";
import ProductDetails from "../components/ProductDetails";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);

  const featchProductDetails = async () => {
    const { data } = await axios.get(
      `http://fakestoreapi.com/products/${productId}`
    );

    dispatch(setSelectedProduct(data));
  };

  useEffect(() => {
    featchProductDetails();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  if (Object.keys(selectedProduct).length === 0) return <div>Loading...</div>;

  return <ProductDetails productDetails={selectedProduct} />;
}
