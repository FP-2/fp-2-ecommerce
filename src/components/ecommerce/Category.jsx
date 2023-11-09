import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import ProductsCard from "../../components/ProductsCard";

const Category = () => {
  const products = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();
  let countMan = 0;
  let countWomen = 0;

  //useEffects, untuk set products dari dataLoader yang telah di ambil
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4">
      {products.map((item) =>{    
      if(item.category === 'men'){
      if(countMan < 3 ){
        countMan++;
        return(
        <div key={item._id}>
            <ProductsCard product={item} />
          </div>
        )
      }}})}
      <div className="mx-5">
          <div className="text-2xl">Mens Product</div>
          <div>Elevate Your Style with Our Mens Collection!</div>
      </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4">
      <div className="mx-5">
          <div className="text-2xl">Womens Product</div>
          <div>Unleash Your Inner Fashionista with Our Womens Apparel!</div>
      </div>
      {products.map((item) =>{    
      if(item.category === 'women' && item.isNew === false){
      if(countWomen < 3 ){
        countWomen++;
        return(
        <div key={item._id}>
            <ProductsCard product={item} />
          </div>
        )
      }}})}
      </div>
    </div>
  );
};

export default Category;
