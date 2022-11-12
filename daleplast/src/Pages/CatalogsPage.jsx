import React from "react";
import CatalogsTitle from "../Components/CatalogsTitle/CatalogsTitle";
import CatalogsMenu from "../Components/CatalogsMenu/CatalogsMenu";
import CatalogsItemContainer from "../Components/CatalogsItemContainer/CatalogsItemContainer";
import "../scss/CatalogsStyls.scss";
const CatalogsPage = () => {
  return (
    <div className="Catalogs-Page">
      <CatalogsTitle />
      <CatalogsMenu />
      <CatalogsItemContainer />
    </div>
  );
};

export default CatalogsPage;
