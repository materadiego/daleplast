import React from "react";
import check from "../../utils/images/compromise-check.png";
import plantaReciclado from "../../utils/images/compromise-planta.png";
import plantaEtapa from "../../utils/images/compromise-etapas.png";
import plantaFabricante from "../../utils/images/compromise-fabricantes.png";
import icon1 from "../../utils/images/compromise-icon1.svg";
import icon2 from "../../utils/images/compromise-icon2.svg";
import icon3 from "../../utils/images/compromise-icon3.svg";
import CompromiseContentSlider from "./CompromiseContentSlider";

const CompromiseContent = () => {
  return (
    <div className="CompromiseContent">
      {/* TITLE */}
      <div className="Compromise-TitleContainer">
        <div className="Orange-Line"></div>
        <p className="Compromise-TitleContainer__Title">NUESTRAS ACCIONES</p>
        <p className="Compromise-TitleContainer__Description">
          Somos responsables y conscientes de cada etapa de nuestro proceso y
          sus consecuencias a nivel ambiental.
        </p>
      </div>
      {/* SECTION 1 */}
      <div className="Compromise-Section Compromise-Section1">
        {/* SECTION TITLE */}
        <div className="Compromise-Section__TitleContainer">
          <img
            src={icon1}
            alt="Icon"
            className="Compromise-Section__TitleContainer--Image"
          ></img>
          <p className="Compromise-Section__TitleContainer--Title">
            PLANTA DE RECICLADO
          </p>
        </div>
        {/* LINE */}
        <div className="Compromise-Section__GreenLine"></div>
        {/* SECTION CONTENT */}
        <div className="Compromise-Section__Content">
          <img
            className="Compromise-Section__Content--Image"
            src={check}
            alt="Icon"
          ></img>
          El reciclado es un proceso físico-mecánico por el cual el plástico,
          luego de ser utilizado, es procesado nuevamente para recuperar su
          valor de uso y poderreinicar el proceso de producción.
        </div>
        <div className="Compromise-Section__Content">
          <img
            className="Compromise-Section__Content--Image"
            src={check}
            alt="Icon"
          ></img>
          Se realiza para permitir la re-utilización de los materiales que
          provienen de los Residuos Sólidos Urbanos y/o, en este caso, del
          residuo industrial.
        </div>
        <img
          src={plantaReciclado}
          alt=""
          className="Compromise-Section__Image"
        ></img>
      </div>
      {/* SECTION 2 */}
      <div className="Compromise-Section Compromise-Section2">
        {/* SECTION TITLE */}
        <div className="Compromise-Section__TitleContainer">
          <img
            src={icon2}
            alt="Icon"
            className="Compromise-Section__TitleContainer--Image"
          ></img>
          <p className="Compromise-Section__TitleContainer--Title Compromise-SectionTitle2">
            ETAPAS DEL RECICLADO
          </p>
        </div>
        {/* LINE */}
        <div className="Compromise-Section__GreenLine"></div>
        {/* SECTION CONTENT */}
        <div className="Compromise-Section__Content">
          <span className="Compromise-Section__Content--Span">1.</span>{" "}
          Recolección, separación y clasificación del scrap según tipo de
          material y color.
        </div>
        <div className="Compromise-Section__Content">
          <span className="Compromise-Section__Content--Span">2.</span>
          Tratamiento mecánico del scrap para obtener el material agrumado.
        </div>
        <div className="Compromise-Section__Content">
          <span className="Compromise-Section__Content--Span">3.</span> El
          agrumado se convierte en pellet tras exponerse a un proceso de alta
          temperatura, agua, secado y ventilación.
        </div>
        <div className="Compromise-Section__Content">
          <span className="Compromise-Section__Content--Span">4.</span>
          El material en forma de pelet está listo para reiniciarn su proceso de
          fabricación.
        </div>
        <img
          src={plantaEtapa}
          alt=""
          className="Compromise-Section__Image"
        ></img>
      </div>
      {/* SECTION 3 */}
      <div className="Compromise-Section Compromise-Section3">
        {/* SECTION TITLE */}
        <div className="Compromise-Section__TitleContainer">
          <img
            src={icon3}
            alt="Icon"
            className="Compromise-Section__TitleContainer--Image"
          ></img>
          <p className="Compromise-Section__TitleContainer--Title">
            SOMOS FABRICANTES CERTIFICADOS DE D2W
          </p>
        </div>
        {/* LINE */}
        <div className="Compromise-Section__GreenLine"></div>
        {/* SECTION CONTENT */}
        <CompromiseContentSlider />
        <img
          src={plantaFabricante}
          alt=""
          className="Compromise-Section__Image"
        ></img>
      </div>
    </div>
  );
};

export default CompromiseContent;
