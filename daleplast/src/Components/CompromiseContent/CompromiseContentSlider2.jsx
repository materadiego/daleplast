import React from "react";
import { useState } from "react";
import sliderIcon1 from "../../utils/images/compromise-slider-icon1.svg";
import sliderIcon2 from "../../utils/images/compromise-slider-icon2.svg";
import buttonImage from "../../utils/images/compromise-slider2button.svg";
import plantaFabricante from "../../utils/images/compromise-fabricantes.webp";

const CompromiseContentSlider2 = () => {
  const [sliderActive, setSliderActive] = useState(false);
  const toggleSlider = () => {
    setSliderActive(!sliderActive);
  };

  return (
    <div className="Compromise-Slider-Desktop">
      <div
        className={`DesktopSlider-Container ${
          sliderActive ? "Desktop-Slide-Active" : ""
        }`}
      >
        {/* SLIDE 1 */}
        <div className="Compromise-Desktop-Slide1">
          <div className="Compromise-Desktop-Slide1__TitleContainer">
            <div className="Compromise-Desktop-Slide1__TitleContainer--Image"></div>
            <p className="Compromise-Desktop-Slide1__TitleContainer--Title">
              SOMOS FABRICANTES CERTIFICADOS DE D2W
            </p>
          </div>
          {/* LINE */}
          <div className="Compromise-Desktop-Slide1__GreenLine"></div>
          {/* SECTION CONTENT */}
          <p className="Compromise-Desktop-Slide1__Content">
            La tecnología D2W le brinda al plástico una vida útil de entre 2 y 5
            años, esto significa que cumplido este tiempo se degrada evitando la
            contaminación del suelo, a diferencia del plástico convencional que
            demora hasta 200 años en desaparecer del ambiente.
          </p>
          <div className="Slider-Button" onClick={toggleSlider}>
            <p className="Slider-Button__Text">
              CONOCÉ MÁS SOBRE EL ADITIVO D2W
            </p>
            <img
              className="Slider-Button__Image"
              src={buttonImage}
              alt="Button"
            ></img>
          </div>
          <img
            src={plantaFabricante}
            alt=""
            className="Compromise-Desktop-Slide1__Image"
          ></img>
        </div>
        {/* SLIDE 2 */}
        <div className="Compromise-Desktop-Slide2">
          <div className="Compromise-Desktop-Slide2__TitleContainer">
            <div className="Compromise-Desktop-Slide2__TitleContainer--Image"></div>
            <p className="Compromise-Desktop-Slide2__TitleContainer--Title">
              ¿QUÉ ES EL ADITIVO OXI-BIODEGRADABLE?
            </p>
          </div>
          {/* LINE */}
          <div className="Compromise-Desktop-Slide2__GreenLine"></div>
          {/* SECTION CONTENT */}
          <p className="Compromise-Desktop-Slide2__Content">
            Se trata de un componente que se añade en forma de pellet durante el
            proceso de fabricación, para alterar la composición del polímero de
            polietileno tradicional y convertirlo en degradable. Ha sido
            aprobado en pruebas de eco toxicidad y es seguro al contacto directo
            con alimentos.
          </p>
          <div className="Slider-Button2" onClick={toggleSlider}>
            <img
              className="Slider-Button2__Image"
              src={buttonImage}
              alt="Button"
            ></img>
          </div>
          <div className="Compromise-Desktop-Slide2__Subcontainer">
            <p className="Compromise-Desktop-Slide2__Subcontainer--Title">
              La oxi-biodegradabilidad ocurre en dos períodos:
            </p>
            <div className="Compromise-Desktop-Slide2-Box">
              <img
                src={sliderIcon1}
                alt="Fragmentos"
                className="Compromise-Desktop-Slide2-Box__Image"
              ></img>
              <p className="Compromise-Desktop-Slide2-Box__Title">
                1° Fragmentos moleculares
              </p>
              <p className="Compromise-Desktop-Slide2-Box__Description">
                El plástico se convierte, bajo condiciones específicas de calor,
                humedad, luz y oxígeno, en fragmentos moleculares menores.
              </p>
            </div>
            <div className="Compromise-Desktop-Slide2-Box">
              <img
                src={sliderIcon2}
                alt="Fragmentos"
                className="Compromise-Desktop-Slide2-Box__Image"
              ></img>
              <p className="Compromise-Desktop-Slide2-Box__Title">
                2° Biodegradación
              </p>
              <p className="Compromise-Desktop-Slide2-Box__Description">
                Estos fragmentos se biodegradan, lo cual significa que son
                convertidos en dióxido de carbono, agua y biomasa gracias a
                microorganismos corruptores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompromiseContentSlider2;
