import React from "react";
import homeAdsImg from "../../../img/add-img.png";

const HomeAds = () => {
  return (
    <div className="md:px-28 my-10 bg-primary h-96">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="-mt-[77px]">
            <img src={homeAdsImg} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-pink-600 font-semibold">New season trends!</p>
            <h1 className="text-3xl font-extrabold">Best Summer Collection</h1>
            <h4 className="mt-3 font-bold text-xl ">Sale Get up to 50% Off</h4>
            <div>
              <button className="btn btn-neutral mt-7">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAds;
