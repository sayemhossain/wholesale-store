import React from "react";
import { Link } from "react-router-dom";
import brandingImg1 from "../../../img/branding1.png";
import banner2 from "../../../img/cover-img/banner2.jpg";
const HomeBranding = () => {
  return (
    <div className="md:px-28 my-10 max-w-[1340px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex bg-primary justify-center items-center rounded-md gap-5">
          <div>
            <img className="rounded-lg w-48" src={brandingImg1} alt="" />
          </div>
          <div className="">
            <h1>Super Sell</h1>
            <h1 className="text-3xl font-bold">New Collection</h1>
            <p className="mt-3 underline">
              <Link to="/products">Shop Now</Link>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center bg-secondary rounded-md gap-5">
          <div>
            <img
              className="rounded-lg"
              src="https://freepngimg.com/thumb/categories/1342.png"
              alt=""
            />
          </div>
          <div className="">
            <h1>New Season</h1>
            <h1 className="text-3xl font-bold">Best Products</h1>
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
