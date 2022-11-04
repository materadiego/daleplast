import React from "react";

const HomeEnvironment = () => {
  return (
    <div className="Environment">
      {/* SECTION CONTAINER */}
      <div className="Environment-Container">
        <div className="Orange-Line" id="Environment-Line"></div>
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
          <div className="Environment-Container__Button--Image Environment-Icon1"></div>
          <p className="Environment-Container__Button--Title Environment-Button-Text-Mobile">
            PLANTA DE RECICLADO
          </p>
          <p className="Environment-Container__Button--Title Environment-Button-Text-Desktop">
            Reciclamos el 100% de nuestro residuo post-industrial
          </p>
          <p className="Environment-Container__Button--VerMas">Ver más</p>
        </div>
        <div className="Environment-Container__Button">
          <div className="Environment-Container__Button--Image Environment-Icon2"></div>
          <p className="Environment-Container__Button--Title Environment-Button-Text-Mobile">
            ETAPAS DE RECICLADO
          </p>
          <p className="Environment-Container__Button--Title Environment-Button-Text-Desktop">
            Cumplimos con las etapas de reciclado de manera responsable
          </p>
          <p className="Environment-Container__Button--VerMas">Ver más</p>
        </div>
        <div className="Environment-Container__Button">
          <div className="Environment-Container__Button--Image Environment-Icon3"></div>
          <p className="Environment-Container__Button--Title Environment-Button-Text-Mobile">
            SOMOS FABRICANTES CERTIFICADOS DE D2W
          </p>
          <p className="Environment-Container__Button--Title Environment-Button-Text-Desktop">
            Somos fabricantes certficados de D2W
          </p>
          <p className="Environment-Container__Button--VerMas">Ver más</p>
        </div>
      </div>
      <div className="Environment-FinalLineContainer">
        <div className="Environment-FinalLineContainer__Line"></div>
      </div>
    </div>
  );
};

export default HomeEnvironment;
