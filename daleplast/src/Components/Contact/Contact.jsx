import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ContactImage from "../../utils/images/contact-bg.webp";
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

  const formNotSubmit = (event) => {
    event.preventDefault();
    setResponse(<img alt="" className="loader" src={Loader}></img>);
    setTimeout(() => {
      setResponse("¡Mensaje enviado exitosamente!");
    }, 2000);
  };

  // const enviarDatos = (event) => {
  //   event.preventDefault();

  //   fetch("https://formsubmit.co/ajax/administracion@daleplast.com.ar", {
  //     method: "post",
  //     body: new FormData(event.target),
  //   })
  //     .then((res) =>
  //       res.ok
  //         ? setResponse("¡Mensaje enviado exitosamente!")
  //         : Promise.reject(res)
  //     )
  //     .catch(
  //       (error) => console.log(error),
  //       setResponse(<img alt="loader" className="loader" src={Loader}></img>)
  //     )
  //     .finally(() => {
  //       setDatos({
  //         inp_name: "",
  //         inp_business: "",
  //         inp_mesage: "",
  //       });
  //     });
  // };

  const [popUp, setPopUp] = useState(false);

  function ActivatePopUp() {
    setPopUp(!popUp);
    console.log("popup");
  }

  function DeactivatePopUp() {
    setPopUp(!popUp);
  }
  return (
    <div className="Contact" id="Contacto">
      <div className="Contact-ImageContainer">
        <img
          className="Contact-ImageContainer--Image"
          src={ContactImage}
          alt="Contact"
        ></img>
      </div>
      <div className="Contact-Container">
        <div className="Orange-Line Contact-OrangeLine"></div>
        <h5 className="Contact-Container__Title">PEDÍ TU PRESUPUESTO</h5>
        <p className="Contact-Container__Text">
          Contactanos para recibir una cotización de acuerdo a tus necesidades.
        </p>
        <div className="Contact-Container__Link" onClick={ActivatePopUp}>
          VER REFERENCIA DE MODELOS
        </div>
        <form
          method="post"
          action=""
          id="form"
          onSubmit={formNotSubmit}
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
          <div className="contact-response">{response}</div>
        </form>
      </div>
      <div className={`Contact-PopUp ${popUp ? "PopUp-Active" : ""}`}>
        <div className="Contact-PopUp__Container">
          <div
            className="Contact-PopUp__Container--Close"
            onClick={DeactivatePopUp}
          ></div>
          <div className="Contact-PopUp__Container--Image"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
