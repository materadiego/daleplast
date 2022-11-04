import React from "react";
import ContactImage from "../../utils/images/contact-bg.png";

const Contact = () => {
  return (
    <div className="Contact">
      <img className="Contact-Image" src={ContactImage} alt="Contact"></img>
      <div className="Contact-Container">
        <div className="Orange-Line"></div>
        <h5 className="Contact-Container__Title">PEDÍ TU PRESUPUESTO</h5>
        <p className="Contact-Container__Text">
          Contactanos para recibir una cotización de acuerdo a tus necesidades.
        </p>
        <div className="Contact-Container__Link">VER REFERENCIA DE MODELOS</div>
        <form className="Contact-Container__Form">
          <input
            className="Contact-Container__Form--Input"
            placeholder="Nombre y Apellido"
          ></input>
          <input
            className="Contact-Container__Form--Input"
            placeholder="Empresa / Comercio"
          ></input>
          <textarea
            className="Contact-Container__Form--TextArea"
            placeholder="Consulta"
          ></textarea>
          <button type="submit" className="Contact-Container__Form--Submit">
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
