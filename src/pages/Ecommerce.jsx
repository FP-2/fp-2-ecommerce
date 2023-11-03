import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router";

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  //useLoaderData, untuk manggil (load) api yang sudah di panggil pada router di app.js page ecommerce dengan menggunakan "loader", (mencoba routing baru buat nyoba fetching)
  const dataLoader = useLoaderData();

  //useEffects, untuk set products dari dataLoader yang telah di ambil
  useEffect(() => {
    setProducts(dataLoader.data);
  }, [dataLoader]);
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
