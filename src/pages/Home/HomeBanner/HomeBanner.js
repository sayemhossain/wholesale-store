import React from "react";
import cover from "../../../img/cover-img/cover.webp";

const HomeBanner = () => {
  return (
    <div className="md:px-28 bg-primary">
      <div className="flex justify-between py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-1 text-sm">
            Taking your Viewing Experience to Next Level
          </p>
          <h1 className="text-4xl font-extrabold">
            The most popular wholesale <br /> store in Bangladesh
          </h1>
          <div className="mt-5">
            <button className="btn btn-neutral">Learn more</button>
          </div>
        </div>
        <div className="">
          <img className="h-80 rounded-lg" src={cover} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
