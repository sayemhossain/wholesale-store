import React from "react";
import HomeAds from "../HomeAds/HomeAds";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeBranding from "../HomeBranding/HomeBranding";
import HomeProducts from "../HomeProducts/HomeProducts";
import Subscribe from "../Subscribe/Subscribe";
import HomeContact from "../HomeContact/HomeContact";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeBranding></HomeBranding>
      <HomeProducts></HomeProducts>
      <HomeAds></HomeAds>
      <HomeContact></HomeContact>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
