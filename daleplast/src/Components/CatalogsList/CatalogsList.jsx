import React from "react";
import CatalogsItem from "../CatalogsItem/CatalogsItem";

function CatalogsList({ products }) {
  return (
    <div className="CatalogCardsContainer">
      {products.map((product) => (
        <CatalogsItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CatalogsList;
