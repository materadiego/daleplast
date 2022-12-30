import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactImage from "../../utils/images/contact-bg.png";
import Loader from "../../utils/images/loader.svg";

const Contact = () => {
  const [response, setResponse] = useState("");
  const [datos, setDatos] = useState({
    inp_name: "",
    inp_email: "",
    inp_mensaje: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();

    fetch("https://formsubmit.co/ajax/a@a.com.ar", {
      method: "post",
      body: new FormData(event.target),
    })
      .then((res) =>
        res.ok
          ? setResponse("¡Mensaje enviado exitosamente!")
          : Promise.reject(res)
      )
      .catch(
        (error) => console.log(error),
        setResponse(<img alt="" className="loader" src={Loader}></img>)
      )
      .finally(() => {
        setDatos({
          inp_name: "",
          inp_business: "",
          inp_mesage: "",
        });
      });
  };

  return (
    <div className="Contact" id="Contacto">
      <img className="Contact-Image" src={ContactImage} alt="Contact"></img>
      <div className="Contact-Container">
        <div className="Orange-Line"></div>
        <h5 className="Contact-Container__Title">PEDÍ TU PRESUPUESTO</h5>
        <p className="Contact-Container__Text">
          Contactanos para recibir una cotización de acuerdo a tus necesidades.
        </p>
        <Link
          className="Contact-Container__Link"
          to={"/Catalogo"}
          style={{ textDecoration: "inherit" }}
        >
          VER REFERENCIA DE MODELOS
        </Link>
        <form
          method="post"
          action=""
          id="form"
          onSubmit={enviarDatos}
          className="Contact-Container__Form"
        >
          <input
            className="Contact-Container__Form--Input"
            type="text"
            name="inp_name"
            onChange={handleInputChange}
            value={datos.inp_name}
            required
            placeholder="Nombre y Apellido"
          ></input>
          <input
            className="Contact-Container__Form--Input"
            type="text"
            name="inp_business"
            onChange={handleInputChange}
            value={datos.inp_business}
            required
            placeholder="Empresa / Comercio"
          ></input>
          <textarea
            className="Contact-Container__Form--TextArea"
            value={datos.inp_mesage}
            name="inp_mesage"
            onChange={handleInputChange}
            required
            placeholder="Consulta"
          ></textarea>
          <button
            type="submit"
            id="submit"
            className="Contact-Container__Form--Submit"
          >
            ENVIAR
          </button>
          <div className="contact-response">
            <div className="contact-response-text" id="contact-response">
              {response}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
