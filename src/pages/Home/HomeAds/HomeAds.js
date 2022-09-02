import React from "react";
import { Link } from "react-router-dom";
import homeAdsImg from "../../../img/add-img.png";

const HomeAds = () => {
  return (
    <div className="md:px-28 my-10 bg-primary py-10">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="">
            <img
              className="rounded-lg"
              src="https://fashinza.com/textile/wp-content/uploads/2022/01/shutterstock_1801491262-1-1.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-pink-600 font-semibold">New season trends!</p>
            <h1 className="text-3xl font-extrabold">Best Summer Collection</h1>
            <h4 className="mt-3">Click the link below and buy your products</h4>
            <div>
              <Link to="/products" className="btn btn-neutral mt-7">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAds;
