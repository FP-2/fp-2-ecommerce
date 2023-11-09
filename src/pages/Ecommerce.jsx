import Banner from "../components/ecommerce/Banner";
import Category from "../components/ecommerce/Category";
import News from "../components/News";

const Ecommerce = () => {
  return (
    <div>
      {/* menampilkan banner */}
      <Banner />
      {/* Menampilkan Product terbaru */}
      <News/>
      {/* menampilkan Product */}
      <Category/>
    </div>
  );
};

export default Ecommerce;
