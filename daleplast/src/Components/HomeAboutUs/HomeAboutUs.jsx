import React from "react";

const HomeAboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs-TextContainer">
        <div className="Orange-Line"></div>
        <h5 className="AboutUs-TextContainer__Title">NOSOTROS</h5>
        <p className="AboutUs-TextContainer__TextOne">
          DALEPLAST es una empresa familiar de la ciudad de Rio Grande, Tierra
          del Fuego, dedicada a la fabricación y comercialización de bolsas,
          film y láminas de polietileno oxi-biodegradables.
        </p>
        <p className="AboutUs-TextContainer__TextTwo">
          El compromiso, la responsabilidad y la honestidad son los pilares que
          nos fundaron y que nos impulsan a trabajar para mejorar la experiencia
          de nuestros clientes.
        </p>
      </div>
      <div className="AboutUs-BoxContainer">
        <div className="AboutUs-BoxContainer__Box">
          <div className="AboutUs-BoxContainer__Box--Image AboutUs-ImageOne"></div>
          <p className="AboutUs-BoxContainer__Box--Text">
            FABRICAMOS <br></br> PRODUCTOS <br></br> DE PRIMERA <br></br>{" "}
            CALIDAD
          </p>
        </div>
        <div className="AboutUs-BoxContainer__Box">
          <div className="AboutUs-BoxContainer__Box--Image AboutUs-ImageTwo"></div>
          <p className="AboutUs-BoxContainer__Box--Text">
            ESTAMOS <br></br> COMPROMETIDOS <br></br> CON EL MEDIO <br></br>{" "}
            AMBIENTE
          </p>
        </div>
        <div className="AboutUs-BoxContainer__Box">
          <div className="AboutUs-BoxContainer__Box--Image AboutUs-ImageThree"></div>
          <p className="AboutUs-BoxContainer__Box--Text">
            BRINDAMOS <br></br> SERVICIO <br></br> PERSONALIZADO
          </p>
        </div>
        <div className="AboutUs-FinalLineContainer">
          <div className="AboutUs-FinalLineContainer__Line"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
