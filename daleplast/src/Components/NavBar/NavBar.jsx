import React from "react";
import Logo from "../../utils/images/navbar-logo.svg";
import Menu from "../../utils/images/navbar-menu.svg";

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
    </div>
  );
};

export default NavBar;
