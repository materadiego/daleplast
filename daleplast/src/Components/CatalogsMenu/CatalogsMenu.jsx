import React from "react";
import { Link } from "react-scroll";

const CatalogsMenuMovile = () => {
  return (
    <div className="ContactsIndex">
      <div className="ContactsIndex-IndexContainer">
        <div className="ContactsIndex-IndexContainer__Index">
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="1"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>RESIUDUOS</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="3"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>TIPO CAMISETA</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="4"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>DE ARRANQUE</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="5"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>CON MANIJA TIPO OVALO O RINON</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="6"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>MANIJAS FLEXIBLES</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="7"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>ENVASADO AL VACIO</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="8"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>
              PARA ALMACENAR Y<br /> COMERCIALIZAR PRODUCTOS
            </p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="11"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>
              ANTIESTATICAS/TERMO-
              <br />
              CONTAIBLES
            </p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="12"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>FILM AGROPOL</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="13"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>FILM STRETCH</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="14"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>ARTICULOS DESCARTABLES</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="1"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>TODOS</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatalogsMenuMovile;
