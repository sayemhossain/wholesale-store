import React from "react";
import { Link } from "react-router-dom";
import cover from "../../../img/cover-img/cover.webp";

const HomeBanner = () => {
  return (
    <div className="md:px-28 bg-primary">
      <div className="md:flex justify-between py-16">
        <div className="md:flex flex-col justify-center">
          <p className="mb-1 text-sm">
            Taking your Viewing Experience to Next Level
          </p>
          <h1 className="text-4xl font-extrabold">
            The most popular wholesale <br /> store in Bangladesh
          </h1>
          <div className="mt-5">
            <Link className="px-5" to="/products" className="btn btn-neutral">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="">
          <img
            className="md:h-80 rounded-2xl px-2 md:px-0"
            src={cover}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
