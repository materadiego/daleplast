import React from "react";
import { useState } from "react";
import FAQsBoxArrow from "../utils/images/FAQs-box-arrow.svg";
import FAQsBoxArrowA from "../utils/images/FAQs-box-arrowa.svg";

import "../scss/FAQsStyles.scss";

const FAQs = () => {
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const Q1 = () => {
    setQ1(!q1);
  };
  const Q2 = () => {
    setQ2(!q2);
  };
  const Q3 = () => {
    setQ3(!q3);
  };
  const Q4 = () => {
    setQ4(!q4);
  };
  const Q5 = () => {
    setQ5(!q5);
  };
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
        <div
          className={`FAQsContainer__Box ${q1 ? "BoxIsActive" : " "}`}
          onClick={Q1}
        >
          ¿Cuál es la compra mínima?
          <div
            className={`FAQsContainer__Box--Arrow ${
              q1 ? "ArrowIsActive" : " "
            }`}
          ></div>
          <p
            className={`FAQsContainer__Box--Response ${
              q1 ? "ResponseIsActive" : " "
            }`}
          >
            Para pedidos de bolsas personalizadas la cantidad minima son 15 kg
            por medida. Para pedidos de bolsas de stock o artículos
            descartables, 1 kg o 1 unidad
          </p>
        </div>
        {/* Q2 */}
        <div
          className={`FAQsContainer__Box ${q2 ? "BoxIsActive" : " "}`}
          onClick={Q2}
        >
          ¿Con cuanta anticipación debo hacer mi pedido?
          <div
            className={`FAQsContainer__Box--Arrow ${
              q2 ? "ArrowIsActive" : " "
            }`}
          ></div>
          <p
            className={`FAQsContainer__Box--Response ${
              q2 ? "ResponseIsActive" : " "
            }`}
          >
            Productos fabricados a medida: con 7 días hábiles de anticipación.
            Productos en stock permanente: Entrega inmediata a coordinar
          </p>
        </div>
        {/* Q3 */}
        <div
          className={`FAQsContainer__Box ${q3 ? "BoxIsActive" : " "}`}
          onClick={Q3}
        >
          ¿Tiene algún costo adicional el envío a domicilio?
          <div
            className={`FAQsContainer__Box--Arrow ${
              q3 ? "ArrowIsActive" : " "
            }`}
          ></div>
          <p
            className={`FAQsContainer__Box--Response ${
              q3 ? "ResponseIsActive" : " "
            }`}
          >
            RESPUESTA
          </p>
        </div>
        {/* Q4 */}
        <div
          className={`FAQsContainer__Box ${q4 ? "BoxIsActive" : " "}`}
          onClick={Q4}
        >
          ¿Cómo puedo pagar?
          <div
            className={`FAQsContainer__Box--Arrow ${
              q4 ? "ArrowIsActive" : " "
            }`}
          ></div>
          <p
            className={`FAQsContainer__Box--Response ${
              q4 ? "ResponseIsActive" : " "
            }`}
          >
            RESPUESTA
          </p>
        </div>
        {/* Q5 */}
        <div
          className={`FAQsContainer__Box ${q5 ? "BoxIsActive" : " "}`}
          onClick={Q5}
        >
          Política de cambios/devolución
          <div
            className={`FAQsContainer__Box--Arrow ${
              q5 ? "ArrowIsActive" : " "
            }`}
          ></div>
          <p
            className={`FAQsContainer__Box--Response ${
              q5 ? "ResponseIsActive" : " "
            }`}
          >
            RESPUESTA
          </p>
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
