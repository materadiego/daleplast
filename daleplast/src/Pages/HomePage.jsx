import React from "react";
import HomeAboutUs from "../Components/HomeAboutUs/HomeAboutUs";
import HomeHero from "../Components/HomeHero/HomeHero";
import HomeProducts from "../Components/HomeProducts/HomeProducts";

const Homepage = () => {
  return (
    <>
      <HomeHero />
      <HomeAboutUs />
      <HomeProducts />
    </>
  );
};

export default Homepage;
