import React from "react";
import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDown from "../../utils/images/catalogmenu-arrowdown.svg";

const CatalogsMenuMovile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="ContactsIndex">
      <div className="ContactsIndex-IndexContainer MobileMenu">
        <Button
          className="ContactsIndex-IndexContainer__Button"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <p>TODOS </p>
          <img src={ArrowDown} alt="arrow" className="MobileMenu-ArrowDown" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="1"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>RESIUDUOS</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="2"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>TIPO CAMISETA</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="3"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>DE ARRANQUE</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="4"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>CON MANIJA TIPO OVALO O RINON</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="5"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>MANIJAS FLEXIBLES</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="6"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>ENVASADO AL VACIO</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="7"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>PARA HIELO</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="8"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>PARA LEÑA Y ARENA</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="9"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>PARA TURBA /SUSTRATO</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="10"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>
                ANTIESTATICAS/TERMO-
                <br />
                CONTAIBLES
              </p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="11"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>FILM AGROPOL</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="12"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>FILM STRETCH</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__txt"
              onClick={handleClose}
              to="13"
              offset={-50}
              duration={1500}
              smooth={false}
            >
              <p>ARTICULOS DESCARTABLES</p>
            </Link>
          </MenuItem>
          <div className="MobileMenu-ArrowUp-Container" onClick={handleClose}>
            <img src={ArrowDown} alt="arrow" className="MobileMenu-ArrowUp" />
          </div>
        </Menu>
      </div>
      <div className="ContactsIndex-IndexContainer DesktopMenu">
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="1"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>BOLSAS DE RESIUDUOS</p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="2"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>BOLSAS CAMISETA</p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="3"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>BOLSAS DE ARRANQUE</p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="4"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>BOLSAS TIPO OVALO O RINON</p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="5"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>
            BOLSAS CON MANIJAS <br></br> FLEXIBLES
          </p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="6"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>
            BOLSAS PARA ENVASADO <br></br> AL VACIO
          </p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="7"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>BOLSAS PARA HIELO</p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="8"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>BOLSAS PARA LEÑA Y ARENA</p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="9"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>
            BOLSAS PARA TURBA/ <br></br>SUSTRATO
          </p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="10"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>
            BOLSAS/LÁMINAS/FILM CON <br></br> ADITIVO ANTIESTÁTICO/<br></br>
            TERMOCONTRAIBLES
          </p>
        </Link>
        <div className="Line"></div>

        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="11"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>FILM AGROTILENO DE 200 MIC</p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="12"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>FILM STRETCH</p>
        </Link>
        <div className="Line"></div>
        <Link
          className="ContactsIndex-IndexContainer__txt"
          to="13"
          offset={-50}
          duration={1500}
          smooth={false}
        >
          <p>ARTICULOS DESCARTABLES</p>
        </Link>
      </div>
    </div>
  );
};

export default CatalogsMenuMovile;
