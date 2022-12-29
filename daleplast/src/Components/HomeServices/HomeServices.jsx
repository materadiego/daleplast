import React from "react";
import servicesIcon1 from "../../utils/images/services-icon1.svg";
import servicesIcon2 from "../../utils/images/services-icon2.svg";
import servicesIcon3 from "../../utils/images/services-icon3.svg";

const HomeServices = () => {
  return (
    <div className="Services" id="Servicios">
      <div className="Services-Container">
        <div className="Orange-Line"></div>
        {/* TITLE */}
        <h5 className="Services-Container__Title">NUESTROS SERVICIOS</h5>
        {/* BOX SUBCONTAINER */}
        <div className="Services-Subcontainer">
          {/* BOX 1 */}
          <div className="Services-Subcontainer__Box">
            <div className="Services-Subcontainer__Box--TopBox Services-TopBox-Left"></div>
            <div className="Services-Subcontainer__Box--TopBox Services-TopBox-Right"></div>
            <div className="Services-Subcontainer__Box--Image Services-Image">
              {" "}
              <img src={servicesIcon1} className="Services-Icon" alt=""></img>
            </div>
            <div className="Services-Subcontainer__Box--Arrow Services-Arrow"></div>
            <h6 className="Services-Subcontainer__Box--Title Services-Box-Title-Mobile">
              ATENCIÓN PERSONALIZADA
            </h6>
            <h6 className="Services-Subcontainer__Box--Title Services-Box-Title-Desktop">
              ATENCIÓN <br /> PERSONALIZADA
            </h6>
            <p className="Services-Subcontainer__Box--Text">
              Te brindamos la mejor alternativa según tu necesidad, teniendo en
              cuenta tu economía, tus gustos y tus preferencias. Respondemos
              todas tus consultas y dudas que puedan surgir en el proceso.
            </p>
          </div>
          {/* BOX 2 */}
          <div className="Services-Subcontainer__Box">
            <div className="Services-Subcontainer__Box--TopBox Services-TopBox-Left"></div>
            <div className="Services-Subcontainer__Box--TopBox Services-TopBox-Right"></div>
            <div className="Services-Subcontainer__Box--Image">
              <img src={servicesIcon2} className="Services-Icon" alt=""></img>
            </div>
            <div className="Services-Subcontainer__Box--Arrow Services-Arrow"></div>
            <h6 className="Services-Subcontainer__Box--Title Services-Box-Title-Mobile">
              SEGUIMIENTO POST-VENTA
            </h6>
            <h6 className="Services-Subcontainer__Box--Title Services-Box-Title-Desktop">
              SEGUIMIENTO <br /> POST-VENTA
            </h6>
            <p className="Services-Subcontainer__Box--Text">
              Nos interesa saber si el producto cumplió con tus expectativas y
              cómo fue tu experiencia de compra, que estés conforme y que nos
              vuelvas a elegir.
            </p>
          </div>
          {/* BOX 3 */}
          <div className="Services-Subcontainer__Box">
            <div className="Services-Subcontainer__Box--TopBox Services-TopBox-Left"></div>
            <div className="Services-Subcontainer__Box--TopBox Services-TopBox-Right"></div>
            <div className="Services-Subcontainer__Box--Image">
              <img src={servicesIcon3} className="Services-Icon" alt=""></img>
            </div>
            <div className="Services-Subcontainer__Box--Arrow Services-Arrow"></div>
            <h6 className="Services-Subcontainer__Box--Title Services-Box-Title-Mobile">
              ENVÍOS SIN CARGO A TODA LA PROVINCIA DE TIERRA DEL FUEGO
            </h6>
            <h6 className="Services-Subcontainer__Box--Title Services-Box-Title-Desktop">
              ENVÍOS SIN CARGO DENTRO DE LA PROVINCIA
            </h6>
            <p className="Services-Subcontainer__Box--Text">
              Enviamos tu pedido sin cargo en compras a partir de $3000 en Rio
              Grande y $5000 en Tolhuin y/o Ushuaia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
