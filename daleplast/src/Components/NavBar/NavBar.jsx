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
        {/* LOGO */}
        <Link
          to={"/"}
          style={{ textDecoration: "inherit" }}
          className="NavBar-Container__Logo"
        >
          <img
            src={Logo}
            alt="Logo"
            className="NavBar-Container__Logo--Image"
          ></img>
        </Link>
        {/* MENU BUTTON */}
        <div className="NavBar-Container__MenuButton" onClick={toggleMenu}>
          <img
            src={Menu}
            alt="Menu-Button"
            className="NavBar-Container__MenuButton--Image"
          />
        </div>
      </div>
      {/* MENU */}
      <div className={`Menu ${menu ? "isActive" : ""}`}>
        <div className="Menu-Close" onClick={toggleMenu}>
          <img alt="" src={MenuX} className="Menu-Close__Image" />
        </div>
        <div className="Logo">
          <img alt="Logo" src={Logo2} className="Logo__Image" />
        </div>
        <div className="Menu-Container">
          <div className="Menu-Container__Links">
            <Link
              style={{ textDecoration: "inherit" }}
              className="Menu-Container__Links--Options link"
              to={"/"}
              onClick={toggleMenu}
            >
              HOME
            </Link>
            <a
              style={{ textDecoration: "inherit" }}
              href="https://materadiego.github.io/daleplast#Nosotros"
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              NOSOTROS
            </a>
            <a
              style={{ textDecoration: "inherit" }}
              href="https://materadiego.github.io/daleplast#Productos"
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              PRODUCTOS
            </a>
            <a
              style={{ textDecoration: "inherit" }}
              href="https://materadiego.github.io/daleplast#Servicios"
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              SERVICIOS
            </a>
            <a
              style={{ textDecoration: "inherit" }}
              href="https://materadiego.github.io/daleplast#Compromiso"
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              COMPROMISO
            </a>
            <Link
              style={{ textDecoration: "inherit" }}
              to={"/FAQs"}
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              PREGUNTAS FRECUENTES
            </Link>

            <a
              style={{ textDecoration: "inherit" }}
              href="https://materadiego.github.io/daleplast#Contacto"
              className="Menu-Container__Links--Contact"
              onClick={toggleMenu}
            >
              PEDIR PRESUPUESTO
            </a>
          </div>
          {/* SOCIAL MEDIA */}
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
