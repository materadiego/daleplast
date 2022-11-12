import React from "react";
import { Element } from "react-scroll";

const CatalogsItem2 = ({ product }) => {
  return (
    <Element name={product.id}>
      <div className="CardContainer2">
        <div className="CategoryTitleContainer2">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer2__Title">{product.category}</p>
          <p className="CategoryTitleContainer2__Description">
            {product.categoryDescription}
          </p>
        </div>
        <div className="Card2">
          <img src={product.img} alt={product.name} className="Card2__Image" />
          <div className="Card2__Info">
            <p className="Card2__Info--Name">{product.name}</p>
            <p className="Card2__Info--Description">{product.desc}</p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">{product.stockTitle}</p>
              <p className="StockInfo2-Measures">{product.stockMedidas}</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default CatalogsItem2;
