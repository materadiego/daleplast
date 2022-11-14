import React from "react";
import fbLogo from "../../utils/images/hero-media-fb.svg";
import igLogo from "../../utils/images/hero-media-ig.svg";

const HomeHero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Overlay"></div>
      <div className="Hero-Container">
        <div className="Hero-Media-Container">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="Hero-Media-Container__Link Hero-Media-Fb"
          >
            <img
              src={fbLogo}
              alt="Facebook"
              className="Hero-Media-Container__Link--Image"
            ></img>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="Hero-Media-Container__Link Hero-Media-Ig"
          >
            <img
              src={igLogo}
              alt="Instagram"
              className="Hero-Media-Container__Link--Image"
            ></img>
          </a>
        </div>
        <p className="Hero-Container__Text Hero-Text-Mobile">
          Somos una empresa familiar líder en la fabricación de bolsas, láminas
          y film de polietileno con tecnología oxi-biodegradable
        </p>
        <p className="Hero-Container__Text Hero-Text-Desktop">
          Somos una empresa familiar líder en la fabricación de bolsas, láminas
          y film de polietileno oxi-biodegradable
        </p>
        <p className="Hero-Container__Description">
          Más de 30 años acompañando a los fueguinos con la mejor calidad y
          servicio de la provincia.
        </p>
        <div className="Hero-Container__ButtonContainer">
          <a
            href="#Nosotros"
            style={{ textDecoration: "inherit" }}
            className="Hero-Container__ButtonContainer--Button"
          >
            SABER MÁS
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
