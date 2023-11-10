import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Products from "../components/Products";
import { fetchProducts } from "../redux/productSlice";

const Shop = () => {
  const products = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <Products product={products} />
    </div>
  );
};

export default Shop;
