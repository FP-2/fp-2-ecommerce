import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductsCard from "../components/ProductsCard";

const News = () => {
  const products = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();

  //useEffects, untuk set products dari redux
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4">
    <div>
        <div className="text-2xl">News Product</div>
        <div>We have made a selection of our customers early products</div>
    </div>
    {products.slice(0,3).map((item)=>{
    if(item.isNew === true){
    return(
        <div key={item._id}>
        <ProductsCard product={item} />
        </div>
    )}})}
    </div>
  );
};

export default News;
