import React from "react";
import icon1 from "../../utils/images/aboutus-box1.svg";
import icon2 from "../../utils/images/aboutus-box2.svg";
import icon3 from "../../utils/images/aboutus-box3.svg";

const HomeAboutUs = () => {
  return (
    <div className="AboutUs" id="Nosotros">
      <div className="AboutUs-TextContainer">
        <div className="Orange-Line"></div>
        <h5 className="AboutUs-TextContainer__Title">NOSOTROS</h5>
        <p className="AboutUs-TextContainer__TextOne">
          DALEPLAST es una empresa familiar de la ciudad de Rio Grande, Tierra
          del Fuego, dedicada a la fabricación y comercialización de bolsas,
          film y láminas de polietileno oxi-biodegradables.
        </p>
        <p className="AboutUs-TextContainer__TextTwo  AboutUs-TextContainer__TextTwo--Mobile ">
          El compromiso, la responsabilidad y la honestidad son los pilares que
          nos fundaron y que nos impulsan a trabajar para mejorar la experiencia
          de nuestros clientes.
        </p>
        <p className="AboutUs-TextContainer__TextTwo AboutUs-TextContainer__TextTwo--Desktop">
          El compromiso, la responsabilidad y la honestidad son los pilares que
          nos fundaron, que hoy mantenemos, y que nos impulsan a trabajar día a
          día para mejorar la experiencia de nuestros clientes.
        </p>
      </div>
      <div className="AboutUs-BoxContainer">
        <div className="AboutUs-BoxContainer__Box">
          {/* <div className="AboutUs-BoxContainer__Box--Image AboutUs-ImageOne"></div> */}
          <img
            src={icon1}
            alt="box-icon"
            className="AboutUs-BoxContainer__Box--Image"
          ></img>
          <p className="AboutUs-BoxContainer__Box--Text">
            FABRICAMOS <br></br> PRODUCTOS <br></br> DE PRIMERA <br></br>{" "}
            CALIDAD
          </p>
        </div>
        <div className="AboutUs-BoxContainer__Box">
          <img
            src={icon2}
            alt="box-icon"
            className="AboutUs-BoxContainer__Box--Image"
          ></img>
          <p className="AboutUs-BoxContainer__Box--Text">
            ESTAMOS <br></br> COMPROMETIDOS <br></br> CON EL MEDIO <br></br>{" "}
            AMBIENTE
          </p>
        </div>
        <div className="AboutUs-BoxContainer__Box">
          <img
            src={icon3}
            alt="box-icon"
            className="AboutUs-BoxContainer__Box--Image"
          ></img>
          <p className="AboutUs-BoxContainer__Box--Text">
            BRINDAMOS <br></br> SERVICIO <br></br> PERSONALIZADO
          </p>
        </div>
      </div>
      <div className="AboutUs-FinalLineContainer">
        <div className="AboutUs-FinalLineContainer__Line"></div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
