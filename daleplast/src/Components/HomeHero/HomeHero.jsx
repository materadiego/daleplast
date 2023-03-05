import React from "react";

const HomeHero = () => {
  return (
    <div className="Hero" fetchpriority="high">
      <div className="Hero-Overlay"></div>
      <div className="Hero-Container">
        <div className="Hero-Media-Container">
          <a
            href="https://www.facebook.com/daleplastbolsas"
            target="_blank"
            rel="noreferrer"
            className="Hero-Media-Container__Link Hero-Media-Fb"
          >
            <div className="Hero-Media-Container__Link--Image Hero-Fb"></div>
          </a>
          <a
            href="https://www.instagram.com/daleplastbolsas/"
            target="_blank"
            rel="noreferrer"
            className="Hero-Media-Container__Link Hero-Media-Ig"
          >
            <div className="Hero-Media-Container__Link--Image Hero-Ig"></div>
          </a>
        </div>
        <p className="Hero-Container__Text Hero-Text-Mobile">
          Somos una empresa familiar líder en la fabricación de bolsas, láminas
          y film de polietileno con tecnología oxi-biodegradables
        </p>
        <p className="Hero-Container__Text Hero-Text-Desktop">
          Somos una empresa familiar líder en la fabricación de bolsas, láminas
          y film de polietileno oxi-biodegradables
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
