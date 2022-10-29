import React from "react";

const HomeHero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Overlay"></div>
      <div className="Hero-Container">
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
          <button className="Hero-Container__ButtonContainer--Button">
            SABER MÁS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
