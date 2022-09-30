import React from "react";

const HomeHero = () => {
  return (
    <div className="Hero">
      <div className="Hero-Overlay"></div>
      <div className="Hero-Container">
        <p className="Hero-Container__Text">
          Somos una empresa familiar líder en la fabricación de bolsas, láminas
          y film de polietileno con tecnología oxi-biodegradable
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
