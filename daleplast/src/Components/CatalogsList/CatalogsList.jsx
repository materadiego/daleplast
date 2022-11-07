import React from "react";
import CatalogsItem from "../CatalogsItem/CatalogsItem";

function CatalogsList({ products }) {
  return (
    <div className="CatalogCardsContainer">
      <div className="CategoryTitleContainer">
        <div className="Orange-Line"></div>
        <p className="CategoryTitleContainer__Title">Category Title</p>
        <p className="CategoryTitleContainer__Description">
          Category Description
        </p>
      </div>

      {products.map((product) => (
        <CatalogsItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CatalogsList;
