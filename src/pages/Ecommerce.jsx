import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { fetchProducts } from "../redux/productSlice"; 


const Ecommerce = () => {
  const products = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();

  //useEffects, untuk set products dari dataLoader yang telah di ambil
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      {/* menampilkan banner */}
      <Banner />
      {/* menampilkan Product, props product untuk mengirim fetch ke components "Products" */}
      <Products product={products} />
    </div>
  );
};

export default Ecommerce;
