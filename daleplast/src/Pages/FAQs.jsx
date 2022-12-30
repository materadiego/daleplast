import React from "react";
import { useState } from "react";

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
          ¿Cuál es la compra mínima de bolsas personalizadas?
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
            La cantidad mínima de fabricación es de 15 kg por medida
          </p>
        </div>
        {/* Q2 */}
        <div
          className={`FAQsContainer__Box ${q2 ? "BoxIsActive" : " "}`}
          onClick={Q2}
        >
          ¿Hacen envíos a domicilio?
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
            Con un mínimo de compra, el envío es GRATIS a Tolhuin, Ushuaia y Río
            Grande. No hacemos envíos fuera de la provincia. Consultanos para
            más información.
          </p>
        </div>
        {/* Q3 */}
        <div
          className={`FAQsContainer__Box ${q3 ? "BoxIsActive" : " "}`}
          onClick={Q3}
        >
          ¿Cuales son los medios de pago?
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
            Aceptamos todos los medios de pago. Consultanos para más
            información.
          </p>
        </div>
        {/* Q4 */}
        <div
          className={`FAQsContainer__Box ${q4 ? "BoxIsActive" : " "}`}
          onClick={Q4}
        >
          Política de Devolución:
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
            Aceptamos devoluciones o cambios cuando se trate de una falla en el
            proceso de fabricación que afecte a la calidad del producto y/o a su
            uso sin excepción.-
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
