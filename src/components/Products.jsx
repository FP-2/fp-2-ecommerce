import ProductsCard from "./ProductsCard";
import { motion } from "framer-motion";
//framerMotion, untuk animasi
import { viewportSlideLeft, viewportSlideRight } from "../framerMotion";

/* eslint-disable react/prop-types */
const Products = ({ product }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        {/* text shoping everyday dengan border hitam */}
        <motion.div {...viewportSlideRight}>
          <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
            shoping everyday
          </h1>
          <span className="w-20 h-[3px] bg-black "></span>
        </motion.div>
        {/* garis hitam dibawah text shoping everyday */}

        {/* deskripsi asal */}
        <motion.div {...viewportSlideLeft}>
          <p className="max-w-[700px] text-gray-600 text-center ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            tempore adipisci quos vitae! Blanditiis adipisci consectetur
            suscipit molestiae eius hic dolorum, minus eum ullam repellendus
            natus tempora itaque, totam voluptate placeat voluptatem possimus
            aspernatur. Est, pariatur architecto? Enim, quidem asperiores!
          </p>
        </motion.div>
        {/* product, mengambil data gambar dari components "ProductsCard" */}
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
          {product.map((item) => (
            <ProductsCard key={item._id} product={item} />
          ))}
          {/* data fetch "product" di dapatkan dari props page "Ecommerce" menggunakan "useLoaderData" */}
        </div>
      </div>
    </div>
  );
};

export default Products;
