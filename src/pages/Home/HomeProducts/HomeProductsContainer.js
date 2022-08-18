import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HomeProductsContainer = ({ product }) => {
  const {
    name,
    img,
    description,
    minimum_order_quantity,
    available_quantity,
    category,
    price,
    rating,
  } = product;
  return (
    <div className="shadow-md p-3 rounded-md">
      <div>
        <div>
          <img className="w-full h-60 rounded" src={img} alt="" />
        </div>
        <div className="mt-2">
          <h1 className="font-semibold">
            {name}{" "}
            <span className="text-sm ml-2">
              {" "}
              <FontAwesomeIcon
                className="text-yellow-300"
                icon={faStar}
              ></FontAwesomeIcon>{" "}
              {rating}
            </span>
          </h1>

          <p className="mt-2 text-sm">
            {description.length > 150
              ? description.slice(0, 150) + "....."
              : description}
          </p>
          <p className="mt-2">
            Avaible Quantity:{" "}
            <span className="font-bold text-gray-500">
              {available_quantity}
            </span>
          </p>
          <p className="mt-2">
            Minimum Order:{" "}
            <span className="font-bold text-gray-500">
              {minimum_order_quantity}
            </span>
          </p>
          <div className="mt-3 mb-1 text-center">
            <button className="btn btn-secondary btn-xs">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductsContainer;