import React from "react";

const HomeEnvironment = () => {
  return (
    <div className="Environment">
      {/* SECTION CONTAINER */}
      <div className="Environment-Container">
        <div className="Orange-Line"></div>
        {/* SECTION TITLE & DESCRIPTION */}
        <h5 className="Environment-Container__Title">
          NUESTRO COMPROMISO CON EL MEDIO AMBIENTE
        </h5>
        <p className="Environment-Container__Description">
          Somos responsables y conscientes de cada etapa de nuestro proceso y
          sus consecuencias a nivel ambiental.
        </p>
        {/* SECTION BUTTONS */}
        <div className="Environment-Container__Button">
          <div className="Environment-Container__Button--Image"></div>
          <p className="Environment-Container__Button--Title">
            PLANTA DE RECICLADO
          </p>
          <p className="Environment-Container__Button--VerMas">Ver más</p>
        </div>
        <div className="Environment-Container__Button">
          <div className="Environment-Container__Button--Image"></div>
          <p className="Environment-Container__Button--Title">
            ETAPAS DE RECICLADO
          </p>
          <p className="Environment-Container__Button--VerMas">Ver más</p>
        </div>
        <div className="Environment-Container__Button">
          <div className="Environment-Container__Button--Image"></div>
          <p className="Environment-Container__Button--Title">
            SOMOS FABRICANTES CERTIFICADOS DE D2W
          </p>
          <p className="Environment-Container__Button--VerMas">Ver más</p>
        </div>
      </div>
    </div>
  );
};

export default HomeEnvironment;
