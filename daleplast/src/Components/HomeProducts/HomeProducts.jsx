import React from "react";
import { Link } from "react-router-dom";
import ProductsImage from "../../utils/images/products-image.png";

const HomeProducts = () => {
  return (
    <div className="Products">
      <div className="Products-TextContainer">
        <div className="Orange-Line"></div>
        <h5 className="Products-TextContainer__Title">PRODUCTOS</h5>
        <p className="Products-TextContainer__Subtitle">
          LA MEJOR CALIDAD EN CADA PROPUESTA
        </p>
        <p className="Products-TextContainer__Text">
          Para uso general, para tu comercio, para la industria & el agro:
          fabricamos bolsas, film y láminas 100% personalizadas y a medida. Te
          aseguramos calidad y durabilidad de todos nuestros productos.
          <span> En todas las medidas y presentaciones.</span>
        </p>
      </div>
      <div className="Products-ImageContainer">
        <img
          src={ProductsImage}
          alt=""
          className="Products-ImageContainer__Image"
        ></img>
        <p className="Products-ImageContainer__Text">
          Podés personalizar medidas, colores e impresión, del producto que
          desees.
        </p>
      </div>
      <div className="Products-ButtonContainer">
        <button className="Products-ButtonContainer__Button">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
            to={"/Catalogo"}
          >
            VER CATÁLOGO
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomeProducts;
