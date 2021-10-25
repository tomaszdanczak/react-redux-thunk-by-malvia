import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Product from "../components/Product";
import { setAllProducts } from "../redux/actions/allProductsActions";

export default function ProductsPage() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    dispatch(setAllProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <div>ProductsPage</div>;
}
