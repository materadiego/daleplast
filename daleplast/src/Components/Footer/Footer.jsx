import React from "react";
import LogoFooter from "../../utils/images/LogoFooter.svg";
import FooterTelefono from "../../utils/images/FooterTelefono.svg";
import FooterWhatsapp from "../../utils/images/FooterWhatsapp.svg";
import FooterMail from "../../utils/images/FooterMail.svg";
import FooterFacebook from "../../utils/images/FooterFacebook.svg";
import FooterInstagram from "../../utils/images/FooterInstagram.svg";

const Footer = () => {
  return (
    <footer>
      <div className="Footer">
        <div className="Footer-Container">
          <div className="Footer-Container__Title">
            <img
              src={LogoFooter}
              alt="LogoFooter"
              className="Footer-Container__Title--Image"
            />
          </div>
          <div className="Footer-Container__Contactanos">
            <div className="Footer-Container__Contactanos--Contacto">
              <div className="Footer-Container__Contactanos--Contacto---txt">
                <p className="Footer-Container__Contactanos--Contacto---txt----txt">
                  CONTACTANOS
                </p>
              </div>
              <div className="Footer-Container__Contactanos--Contacto---Telefono">
                <img
                  src={FooterTelefono}
                  alt="FooterTelefono"
                  className="Footer-Container__Contactanos--Contacto---Telefono----Image"
                />
                <p className="Footer-Container__Contactanos--Contacto---Telefono----txt">
                  (0296) 431328
                </p>
              </div>
            </div>
            <div className="Footer-Container__Contactanos--Contacto---Whatsapp">
              <img
                src={FooterWhatsapp}
                alt="LogoWhatsapp"
                className="Footer-Container__Contactanos--Contacto---Whatsapp----Image"
              />

              <p className="Footer-Container__Contactanos--Contacto---Whatsapp-----txt1">
                (2964)503046
              </p>
              <p className="Footer-Container__Contactanos--Contacto---Whatsapp-----txt1">
                (2964)503045
              </p>
            </div>
            <div className="Footer-Container__Contactanos--Contacto---Mail">
              <img
                src={FooterMail}
                alt="LogoMail"
                className="Footer-Container__Contactanos--Contacto---Mail----Image"
              />
              <p className="Footer-Container__Contactanos--Contacto---Mail----txt">
                administracion@daleplast.com.ar
              </p>
            </div>
          </div>
          <div className="Footer-Container__BorderSize">
            <div className="Footer-Container__BorderSize--Border"></div>
          </div>
          <div className="Footer-Container__Seguinos">
            <div className="Footer-Container__Seguinos--Redes">
              <p className="Footer-Container__Seguinos--Redes---Title">
                SEGUINOS EN NUESTRAS REDES
              </p>
            </div>
            <div className="Footer-Container__Seguinos--Redes---Links">
              <div className="Footer-Container__Seguinos--Redes---Links----Facebook">
                <img
                  src={FooterFacebook}
                  alt="LogoFacebook"
                  className="Footer-Container__Seguinos--Redes---Links----Facebook-----Image"
                />
              </div>
              <div className="Footer-Container__Seguinos--Redes---Links----Instagram">
                <img
                  src={FooterInstagram}
                  alt="LogoInstagram"
                  className="Footer-Container__Seguinos--Redes---Links----Instagram-----Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
