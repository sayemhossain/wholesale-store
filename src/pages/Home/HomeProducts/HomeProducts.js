import React from "react";
import useProducts from "../../../hooks/useProducts";
import HomeProductsContainer from "./HomeProductsContainer";

const HomeProducts = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="md:px-28 py-10">
      <h1 className="text-4xl text-center font-semibold">Exclusive Products</h1>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {products.map((product) => (
          <HomeProductsContainer
            key={product._id}
            product={product}
          ></HomeProductsContainer>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
