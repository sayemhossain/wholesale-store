import React from "react";
import HomeAds from "../HomeAds/HomeAds";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeBranding from "../HomeBranding/HomeBranding";
import HomeProducts from "../HomeProducts/HomeProducts";
import Subscribe from "../Subscribe/Subscribe";
import HomeContact from "../HomeContact/HomeContact";
import Review from "../Review/Review";
import Mylocation from "../../GoogleMap/Mylocation";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeBranding></HomeBranding>
      <HomeProducts></HomeProducts>
      <HomeAds></HomeAds>
      <Review></Review>
      <HomeContact></HomeContact>
      <div className="">
        <Mylocation></Mylocation>
      </div>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
