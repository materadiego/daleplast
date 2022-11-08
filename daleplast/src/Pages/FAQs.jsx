import React from "react";
import FAQsBoxArrow from "../utils/images/FAQs-box-arrow.svg";
import "../scss/FAQsStyles.scss";

const FAQs = () => {
  return (
    <div className="FAQs">
      <div className="Pages-Title-Container">
        <div className="Pages-Title-Container__Subcontainer">
          <div className="Orange-Line"></div>
          <p className="Pages-Title-Container__Subcontainer--Title">
            PREGUNTAS FRECUENTES
          </p>
        </div>
        <div className="Pages-Title-Container__Subcontainer--Line"></div>
      </div>
      <div className="FAQsContainer">
        {/* Q1 */}
        <div className="FAQsContainer__Box">
          ¿Cuál es la compra mínima?
          <img
            alt="box-arrow"
            src={FAQsBoxArrow}
            className="FAQsContainer__Box--Arrow"
          />
          <p className="FAQsContainer__Box--Response">
            Para pedidos de bolsas personalizadas la cantidad minima son 15 kg
            por medida. Para pedidos de bolsas de stock o artículos
            descartables, 1 kg o 1 unidad
          </p>
        </div>
        {/* Q2 */}
        <div className="FAQsContainer__Box">
          ¿Con cuanta anticipación debo hacer mi pedido?
          <img
            alt="box-arrow"
            src={FAQsBoxArrow}
            className="FAQsContainer__Box--Arrow"
          />
          <p className="FAQsContainer__Box--Response">
            Productos fabricados a medida: con 7 días hábiles de anticipación.
            Productos en stock permanente: Entrega inmediata a coordinar
          </p>
        </div>
        {/* Q3 */}
        <div className="FAQsContainer__Box">
          ¿Tiene algún costo adicional el envío a domicilio?
          <img
            alt="box-arrow"
            src={FAQsBoxArrow}
            className="FAQsContainer__Box--Arrow"
          />
          <p className="FAQsContainer__Box--Response">RESPUESTA</p>
        </div>
        {/* Q4 */}
        <div className="FAQsContainer__Box">
          ¿Cómo puedo pagar?
          <img
            alt="box-arrow"
            src={FAQsBoxArrow}
            className="FAQsContainer__Box--Arrow"
          />
          <p className="FAQsContainer__Box--Response">RESPUESTA</p>
        </div>
        {/* Q5 */}
        <div className="FAQsContainer__Box">
          Política de cambios/devolución
          <img
            alt="box-arrow"
            src={FAQsBoxArrow}
            className="FAQsContainer__Box--Arrow"
          />
          <p className="FAQsContainer__Box--Response">RESPUESTA</p>
        </div>
      </div>
      <div className="UpContainer">
        <a className="UpContainer__Link" href="#Top">
          <div className="UpContainer__Link--Image"></div>
        </a>
      </div>
    </div>
  );
};

export default FAQs;
