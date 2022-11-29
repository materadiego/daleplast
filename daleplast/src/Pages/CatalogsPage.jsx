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
      <div className="UpContainerCatalog">
        <a className="UpContainerCatalog__Link" href="#Top">
          <div className="UpContainerCatalog__Link--Image"></div>
        </a>
      </div>
    </div>
  );
};

export default CatalogsPage;
