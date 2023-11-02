import ProductsCard from "./ProductsCard";

/* eslint-disable react/prop-types */
const Products = ({ product }) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          shoping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black "></span>
        <p className="max-w-[700px] text-gray-600 text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          tempore adipisci quos vitae! Blanditiis adipisci consectetur suscipit
          molestiae eius hic dolorum, minus eum ullam repellendus natus tempora
          itaque, totam voluptate placeat voluptatem possimus aspernatur. Est,
          pariatur architecto? Enim, quidem asperiores!
        </p>
        <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
          {product.map((item) => (
            <ProductsCard key={item.id} product={item} />
          ))}
          {/* data fetch di dapatkan dari props page ecommerce menggunakan "useLoaderData" */}
        </div>
      </div>
    </div>
  );
};

export default Products;
