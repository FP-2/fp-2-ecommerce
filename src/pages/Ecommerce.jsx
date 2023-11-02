import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router";

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const dataLoader = useLoaderData(); //useLoaderData, untuk manggil (load) api yang sudah di panggil pada router di app.js page ecommerce dengan menggunakan "loader", (mencoba routing baru buat nyoba fetching)

  useEffect(() => {
    setProducts(dataLoader.data);
  }, [dataLoader]);
  return (
    <div>
      <Banner />
      <Products product={products} />
    </div>
  );
};

export default Ecommerce;
