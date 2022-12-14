import React from "react";
import check from "../../utils/images/compromise-check.png";
import plantaReciclado from "../../utils/images/compromise-planta.webp";
import plantaEtapa from "../../utils/images/compromise-etapas.webp";
import icon1 from "../../utils/images/compromise-icon1.svg";
import icon2 from "../../utils/images/compromise-icon2.svg";
import icon3 from "../../utils/images/compromise-icon3.svg";
import CompromiseContentSlider from "./CompromiseContentSlider";
import CompromiseContentSlider2 from "./CompromiseContentSlider2";

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
        <div className="Compromise-Section-Container Compromise-Section-Container1">
          <div className="Compromise-Section-Container__TitleContainer">
            <img
              src={icon1}
              alt="Icon"
              className="Compromise-Section-Container__TitleContainer--Image"
            ></img>
            <p className="Compromise-Section-Container__TitleContainer--Title">
              PLANTA DE RECICLADO
            </p>
          </div>
          {/* LINE */}
          <div className="Compromise-Section-Container__GreenLine"></div>
          <p className="Compromise-Section-Container__DesktopSubtitle">
            Reciclamos el 100% de nuestro residuo post-industrial.
          </p>

          {/* SECTION CONTENT */}
          <div className="Compromise-Section-Container__Content">
            <img
              className="Compromise-Section-Container__Content--Image"
              src={check}
              alt="Icon"
            ></img>
            El reciclado es un proceso f??sico-mec??nico por el cual el pl??stico,
            luego de ser utilizado, es procesado nuevamente para recuperar su
            valor de uso y poderreinicar el proceso de producci??n.
          </div>
          <div className="Compromise-Section-Container__Content">
            <img
              className="Compromise-Section-Container__Content--Image"
              src={check}
              alt="Icon"
            ></img>
            Se realiza para permitir la re-utilizaci??n de los materiales que
            provienen de los Residuos S??lidos Urbanos y/o, en este caso, del
            residuo industrial.
          </div>
        </div>
        <img
          src={plantaReciclado}
          alt=""
          className="Compromise-Section-Container__Image Compromise-Image1"
        ></img>
      </div>
      {/* SECTION 2 */}
      <div className="Compromise-Section Compromise-Section2">
        {/* SECTION TITLE */}
        <div className="Compromise-Section-Container Compromise-Section-Container2">
          <div className="Compromise-Section-Container__TitleContainer">
            <img
              src={icon2}
              alt="Icon"
              className="Compromise-Section-Container__TitleContainer--Image"
            ></img>
            <p className="Compromise-Section-Container__TitleContainer--Title Compromise-SectionTitle2">
              ETAPAS DEL RECICLADO
            </p>
          </div>
          {/* LINE */}

          <div className="Compromise-Section-Container__GreenLine"></div>
          {/* SECTION CONTENT */}

          <div className="Compromise-Section-Container__Content">
            <span className="Compromise-Section-Container__Content--Span">
              1.
            </span>{" "}
            Recolecci??n, separaci??n y clasificaci??n del scrap seg??n tipo de
            material y color.
          </div>
          <div className="Compromise-Section-Container__Content">
            <span className="Compromise-Section-Container__Content--Span">
              2.
            </span>
            Tratamiento mec??nico del scrap para obtener el material agrumado.
          </div>
          <div className="Compromise-Section-Container__Content">
            <span className="Compromise-Section-Container__Content--Span">
              3.
            </span>{" "}
            El agrumado se convierte en pellet tras exponerse a un proceso de
            alta temperatura, agua, secado y ventilaci??n.
          </div>
          <div className="Compromise-Section-Container__Content">
            <span className="Compromise-Section-Container__Content--Span">
              4.
            </span>
            El material en forma de pelet est?? listo para reiniciarn su proceso
            de fabricaci??n.
          </div>
        </div>
        <img
          src={plantaEtapa}
          alt=""
          className="Compromise-Section-Container__Image Compromise-Image2"
        ></img>
      </div>
      {/* SECTION 3 */}
      <div className="Compromise-Section Compromise-Section3 Compromise-Slider-Mobile">
        <div className="Compromise-Section-Container">
          {/* SECTION TITLE */}
          <div className="Compromise-Section-Container__TitleContainer">
            <img
              src={icon3}
              alt="Icon"
              className="Compromise-Section-Container__TitleContainer--Image"
            ></img>
            <p className="Compromise-Section-Container__TitleContainer--Title">
              SOMOS FABRICANTES CERTIFICADOS DE D2W
            </p>
          </div>
          {/* LINE */}
          <div className="Compromise-Section-Container__GreenLine"></div>
          {/* SECTION CONTENT */}
          <CompromiseContentSlider />
        </div>
      </div>
      <CompromiseContentSlider2 />
    </div>
  );
};

export default CompromiseContent;
