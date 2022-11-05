import React from "react";
import CatalogsTitle from "../Components/CatalogsTitle/CatalogsTitle";
import CatalogsMenu from "../Components/CatalogsMenu/CatalogsMenu";
import CatalogsItemContainer from "../Components/CatalogsItemContainer/CatalogsItemContainer";

const CatalogsPage = () => {
  return (
    <>
      <CatalogsTitle />
      <CatalogsMenu />
      <CatalogsItemContainer />
    </>
  );
};

export default CatalogsPage;
