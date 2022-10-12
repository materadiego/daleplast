import React from "react";
import HomeAboutUs from "../Components/HomeAboutUs/HomeAboutUs";
import HomeEnvironment from "../Components/HomeEnvironment/HomeEnvironment";
import HomeHero from "../Components/HomeHero/HomeHero";
import HomeProducts from "../Components/HomeProducts/HomeProducts";
import HomeServices from "../Components/HomeServices/HomeServices";
import "../scss/HomeStyles.scss";

const Homepage = () => {
  return (
    <>
      <HomeHero />
      <HomeAboutUs />
      <HomeProducts />
      <HomeServices />
      <HomeEnvironment />
    </>
  );
};

export default Homepage;
