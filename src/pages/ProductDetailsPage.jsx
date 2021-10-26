import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSelectedProduct,
  removeSelectedProduct,
} from "../redux/actions/selectedProductActions";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/Loading";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.selectedProduct);

  useEffect(() => {
    dispatch(fetchSelectedProduct(productId));

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  if (Object.keys(selectedProduct).length === 0)
    return <Loading text="Loading" />;

  return <ProductDetails productDetails={selectedProduct} />;
}
