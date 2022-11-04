import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../utils/images/navbar-logo.svg";
import Logo2 from "../../utils/images/navbar-logo2.svg";
import Menu from "../../utils/images/navbar-menu.svg";
import MenuX from "../../utils/images/navbar-x.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
    setMenuButton(!menuButton);
    setMenuIsActive(!menuIsActive);
  };
  return (
    <div className="NavBar">
      <div className="NavBar-Container">
        <img src={Logo} alt="Logo" className="NavBar-Container__Logo"></img>
        <div className="NavBar-Container__MenuButton" onClick={toggleMenu}>
          <img
            src={Menu}
            alt="Menu-Button"
            className="NavBar-Container__MenuButton--Image"
          />
        </div>
      </div>
      <div className={`Menu ${menu ? "isActive" : ""}`}>
        <div className="Menu-Close" onClick={toggleMenu}>
          <img alt="" src={MenuX} className="Menu-Close__Image" />
        </div>
        <div className="Logo">
          <img alt="Logo" src={Logo2} className="Logo__Image" />
        </div>
        <div className="Menu-Container">
          <div className="Menu-Container__Links">
            <Link className="Menu-Container__Links--Options link" to={"/"}>
              HOME
            </Link>
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
