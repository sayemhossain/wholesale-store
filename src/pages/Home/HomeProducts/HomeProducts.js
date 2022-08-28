import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import HomeProductsContainer from "./HomeProductsContainer";

const HomeProducts = () => {
  const [products, setProducts] = useProducts();
  return (
    <div className="md:px-28 py-10 max-w-[1340px] mx-auto">
      <h1 className="text-4xl text-center font-semibold">Exclusive Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10 mx-5 md:mx-0">
        {products.map((product) => (
          <HomeProductsContainer
            key={product._id}
            product={product}
          ></HomeProductsContainer>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link className="hover:underline hover:text-red-800" to="/products">
          See more{" "}
          <FontAwesomeIcon
            className="text-xs"
            icon={faArrowRight}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default HomeProducts;
