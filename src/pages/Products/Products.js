import React from "react";
import useProducts from "../../hooks/useProducts";
import HomeProductsContainer from "../Home/HomeProducts/HomeProductsContainer";

const Products = () => {
  const [products] = useProducts();
  return (
    <div className="md:px-28 py-10">
      <h1 className="text-4xl text-center font-semibold">All Products</h1>
      <p className="text-xs text-center text-red-600 mt-1">
        Total proucts: {products.length}
      </p>
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

export default Products;
