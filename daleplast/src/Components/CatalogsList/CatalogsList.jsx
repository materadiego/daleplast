import React from "react";
import CatalogsItem from "../CatalogsItem/CatalogsItem";

function CatalogsList({ Items }) {
  return;
  {
    Items.map((p) => {
      <CatalogsItem
        key={p.Id}
        Url={p.Url}
        Nombre={p.Nombre}
        Desc={p.Desc}
        StockTitle={p.StockTitle}
        StockMedidas={p.StockMedidas}
      />;
    });
  }
}

export default CatalogsList;
