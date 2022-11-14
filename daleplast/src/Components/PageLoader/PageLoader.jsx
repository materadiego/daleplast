import React from "react";
import pageLoader from "../../utils/images/page-loader.svg";
import logoLoader from "../../utils/images/navbar-logo.svg";

const PageLoader = () => {
  return (
    <div className="PageLoader-Container">
      <img src={logoLoader} alt="Logo" className="PageLoader-Container__Logo" />

      <img
        src={pageLoader}
        alt="Loader"
        className="PageLoader-Container__Loader"
      />
    </div>
  );
};

export default PageLoader;
