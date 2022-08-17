import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeBranding from "../HomeBranding/HomeBranding";
import HomeProducts from "../HomeProducts/HomeProducts";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeBranding></HomeBranding>
      <HomeProducts></HomeProducts>
    </div>
  );
};

export default Home;
