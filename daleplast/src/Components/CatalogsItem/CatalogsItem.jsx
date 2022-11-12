import React from "react";
import { Element } from "react-scroll";

const CatalogsItem = ({ product }) => {
  return (
    <Element name={product.id}>
      <div className="CardContainer">
        <div className="CategoryTitleContainer">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">{product.category}</p>
          <p className="CategoryTitleContainer__Description">
            {product.categoryDescription}
          </p>
        </div>
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
      </div>
    </Element>
  );
};

export default CatalogsItem;
