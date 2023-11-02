/* eslint-disable react/prop-types */
const ProductsCard = ({ product }) => {
  return (
    <div className="group relative">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-300"
          src={product.image} //data fetch di dapatkan dari props bagian page ecommerce menggunakan "useLoaderData"
          alt="productImage"
        />
      </div>
    </div>
  );
};

export default ProductsCard;
