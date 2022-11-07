import React from "react";

const CatalogsItem = ({ product }) => {
  return (
    <div className="Card">
      <img src={product.img} alt={product.name} className="Card__Image" />
      <div className="Card__Info">
        <p className="Card__Info--Name">{product.name}</p>
        <p className="Card__Info--Description">{product.desc}</p>
        <div className="Card__Info--StockInfo">
          <p className="StockInfo-Title">{product.stockTitle}</p>
          <p className="StockInfo-Measures">{product.stockMedidas}</p>
        </div>
      </div>
    </div>
  );
};

export default CatalogsItem;
