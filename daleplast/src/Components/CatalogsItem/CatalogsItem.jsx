import React from "react";

function CatalogsItem(Id, Url, Nombre, Desc, StockTitle, StockMedidas) {
  return (
    <div className="ItemCard" key={Id}>
      <img className="ItemCard__Url">{Url}</img>
      <p className="ItemCard__Title">{Nombre}</p>
      <p className="ItemCard__Desc">{Desc}</p>
      <p className="ItemCard__STockTitle">{StockTitle}</p>
      <p className="ItemCard__STockMedidas">{StockMedidas}</p>
    </div>
  );
}

export default CatalogsItem;
