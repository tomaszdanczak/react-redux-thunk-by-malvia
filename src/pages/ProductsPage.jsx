import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { setAllProducts } from "../redux/actions/allProductsActions";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  const fetchProducts = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");

    dispatch(setAllProducts(data));
  };

  useEffect(() => {
    if (allProducts.length === 0) {
      fetchProducts();
    }
  }, []);

  return (
    <div className="flex flex-row flex-wrap">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
