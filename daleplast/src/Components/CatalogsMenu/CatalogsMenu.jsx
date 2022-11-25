import React from "react";
import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
          className="ContactsIndex-IndexContainer__Index--Button"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <p>TODOS</p>
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
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="1"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>RESIUDUOS</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="2"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>TIPO CAMISETA</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="3"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>DE ARRANQUE</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="4"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>CON MANIJA TIPO OVALO O RINON</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="5"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>MANIJAS FLEXIBLES</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="6"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>ENVASADO AL VACIO</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="7"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>PARA HIELO</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="8"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>PARA LEÑA Y ARENA</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="9"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>PARA TURBA /SUSTRATO</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="10"
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
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="11"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>FILM AGROPOL</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="12"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>FILM STRETCH</p>
            </Link>
          </MenuItem>
          <div className="Line"></div>
          <MenuItem>
            <Link
              className="ContactsIndex-IndexContainer__Index--txt"
              onClick={handleClose}
              to="13"
              offset={-50}
              duration={1500}
              smooth={true}
            >
              <p>ARTICULOS DESCARTABLES</p>
            </Link>
          </MenuItem>
        </Menu>
      </div>
      <div className="ContactsIndex-IndexContainer DesktopMenu">
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
            to="2"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>TIPO CAMISETA</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="3"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>DE ARRANQUE</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="4"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>CON MANIJA TIPO OVALO O RINON</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="5"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>MANIJAS FLEXIBLES</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="6"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>ENVASADO AL VACIO</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="7"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>PARA HIELO</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="8"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>PARA LEÑA Y ARENA</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="9"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>PARA TURBA /SUSTRATO</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="10"
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
            to="11"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>FILM AGROPOL</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="12"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>FILM STRETCH</p>
          </Link>
          <div className="Line"></div>
          <Link
            className="ContactsIndex-IndexContainer__Index--txt"
            to="13"
            offset={-50}
            duration={1500}
            smooth={true}
          >
            <p>ARTICULOS DESCARTABLES</p>
          </Link>
          <div className="Line"></div>
        </div>
      </div>
    </div>
  );
};

export default CatalogsMenuMovile;
