import Banner from "../components/ecommerce/Banner";
import Category from "../components/ecommerce/Category";
import Type from "../components/ecommerce/Type";
import News from "../components/News";

const Ecommerce = () => {
  return (
    <div>
      {/* menampilkan banner */}
      <Banner />
      {/* Menampilkan Jenis Product */}
      <Type/>
      {/* Menampilkan Product terbaru */}
      <News/>
      {/* menampilkan Kategori */}
      <Category/>
    </div>
  );
};

export default Ecommerce;
