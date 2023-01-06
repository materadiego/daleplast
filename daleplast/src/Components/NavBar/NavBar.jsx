import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <Link
          onClick={toggleMenu}
          to={"/"}
          style={{ textDecoration: "inherit" }}
          className="Logo"
        >
          <img alt="Logo" src={Logo2} className="Logo__Image" />
        </Link>
        <div className="Menu-Container">
          <div className="Menu-Container__Links">
            <NavLink
              style={{ textDecoration: "inherit" }}
              className="Menu-Container__Links--Options link"
              to={"/"}
              onClick={toggleMenu}
            >
              HOME
            </NavLink>
            <NavLink
              style={{ textDecoration: "inherit" }}
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
              to={"/Nosotros"}
            >
              NOSOTROS
            </NavLink>
            <NavLink
              style={{ textDecoration: "inherit" }}
              to={"/Catalogo"}
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              PRODUCTOS
            </NavLink>
            <NavLink
              style={{ textDecoration: "inherit" }}
              to={"/Servicios"}
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              SERVICIOS
            </NavLink>
            <NavLink
              style={{ textDecoration: "inherit" }}
              to={"/Compromiso"}
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              COMPROMISO
            </NavLink>
            <NavLink
              style={{ textDecoration: "inherit" }}
              to={"/FAQs"}
              className="Menu-Container__Links--Options"
              onClick={toggleMenu}
            >
              PREGUNTAS FRECUENTES
            </NavLink>

            <a
              style={{ textDecoration: "inherit" }}
              href="#Contacto"
              className="Menu-Container__Links--Contact"
              onClick={toggleMenu}
            >
              PEDIR PRESUPUESTO
            </a>
          </div>
          {/* SOCIAL MEDIA */}
          <div className="Menu-Container__Social">
            <a
              style={{ textDecoration: "inherit" }}
              href="https://www.facebook.com/daleplastbolsas"
              target={"_blank"}
              rel="noreferrer"
              className="Menu-Container__Social--Image"
            >
              <figure className="NavBar-fb" id="NavBar-fb"></figure>
            </a>
            <a
              style={{ textDecoration: "inherit" }}
              href="https://www.instagram.com/daleplastbolsas/"
              target={"_blank"}
              rel="noreferrer"
              className="Menu-Container__Social--Image"
            >
              <figure className="NavBar-ig" id="NavBar-ig"></figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
