import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../../../img/cover-img/banner1.jpg";
import banner2 from "../../../img/cover-img/banner2.jpg";
const HomeBranding = () => {
  return (
    <div className="md:px-28 my-10 max-w-[1340px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative">
          <div>
            <img className="rounded-lg" src={banner1} alt="" />
          </div>
          <div className="absolute top-24 right-12">
            <h1>Super Sell</h1>
            <h1 className="text-3xl font-bold">New Collection</h1>
            <p className="mt-3 underline">
              <Link to="/products">Shop Now</Link>
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="rounded-lg" src={banner2} alt="" />
          <div className="absolute top-24 right-12">
            <h1>New Season</h1>
            <h1 className="text-3xl font-bold">Sale 40% Off</h1>
            <p className="mt-3 underline">
              <Link to="/products">Shop Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBranding;
