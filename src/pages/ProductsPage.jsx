import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import Product from "../components/Product";
import { fetchAllProducts } from "../redux/actions/allProductsActions";

export default function ProductsPage() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    if (allProducts.length === 0) {
      dispatch(fetchAllProducts());
    }
  }, []);

  if (allProducts.length === 0) {
    return <Loading text="Loading" />;
  }

  return (
    <div className="flex flex-row flex-wrap">
      {allProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
