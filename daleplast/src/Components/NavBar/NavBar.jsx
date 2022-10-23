import React from "react";
import Logo from "../../utils/images/navbar-logo.svg";
import Logo2 from "../../utils/images/navbar-logo2.svg";
import Menu from "../../utils/images/navbar-menu.svg";
import MenuX from "../../utils/images/navbar-x.png";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar-Container">
        <img src={Logo} alt="Logo" className="NavBar-Container__Logo"></img>
        <div className="NavBar-Container__MenuButton">
          <img
            src={Menu}
            alt="Menu-Button"
            className="NavBar-Container__MenuButton--Image"
          />
        </div>
      </div>
      <div className="Menu">
        <div className="Menu-Close">
          <img alt="" src={MenuX} className="Menu-Close__Image" />
        </div>
        <div className="Logo">
          <img alt="Logo" src={Logo2} className="Logo__Image" />
        </div>
        <div className="Menu-Container">
          <div className="Menu-Container__Links">
            <a href="#Home" className="Menu-Container__Links--Options">
              HOME
            </a>
            <a href="#AboutUs" className="Menu-Container__Links--Options">
              NOSOTROS
            </a>
            <a href="#Products" className="Menu-Container__Links--Options">
              PRODUCTOS
            </a>
            <a href="#Services" className="Menu-Container__Links--Options">
              SERVICIOS
            </a>
            <a href="#Compromise" className="Menu-Container__Links--Options">
              COMPROMISO
            </a>
            <a href="#FAQs" className="Menu-Container__Links--Options">
              PREGUNRAS FRECUENTES
            </a>

            <a href="#Contact" className="Menu-Container__Links--Contact">
              PEDIR PRESUPUESTO
            </a>
          </div>
          <div className="Menu-Container__Social">
            <div className="Menu-Container__Social--Image fb"></div>
            <div className="Menu-Container__Social--Image ig"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
