import React from "react";
import LogoFooter from "../../utils/images/LogoFooter.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-Container">
        <img src={LogoFooter} alt="Logo-Footer" className="Footer-Logo" />
        <div className="Footer-Contact">
          <p className="Footer-Title">CONTACTANOS</p>
          <div className="Footer-Contact__Data">
            <div className="Footer-Contact__Data--Image Phone"></div>
            <p className="Footer-Contact__Data--txt">(2964)431328</p>
          </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 6124e44fb7af8c0731e89630b83cc1e671c33ee1
          <div className="Footer-Contact__Data">
            <div className="Footer-Contact__Data--Image Whatsapp"></div>
            <p className="Footer-Contact__Data--txt">
              (2964)503046
              <br />
              (2964)503045
            </p>
<<<<<<< HEAD
>>>>>>> 6124e44fb7af8c0731e89630b83cc1e671c33ee1
=======
>>>>>>> 6124e44fb7af8c0731e89630b83cc1e671c33ee1
          </div>
          <div className="Footer-Contact__Data">
            <div className="Footer-Contact__Data--Image Mail"></div>
            <p className="Footer-Contact__Data--txt">
              administracion@daleplast.com.ar
            </p>
          </div>
        </div>
        <div className="Green-Line"></div>
        <div className="Footer-Redes">
          <p className="Footer-Title">SEGUINOS EN NUESTRAS REDES</p>
          <div className="Footer-Redes__Facebook"></div>
          <div className="Footer-Redes__Instagram"></div>
          <div className="Footer-Redes__Linkedin"></div>
        </div>
        <div className="Green-Line"></div>
        <div className="Footer-Maps">
          <p className="Footer-Title">NUESTRAS OFICINAS</p>
          <div className="Footer-Maps__Image"></div>
          <p className="Footer-Maps__txt">islas malvinas 2159</p>
          <iframe
            className="Footer-Maps__Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.9231750007243!2d-67.73177568417586!3d-53.790854880074555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b167a16512a73%3A0xab3fb687a7682620!2sDALEPLAST%20-%20Bolsas%20de%20Polietileno%20Oxi-Biodegradables!5e0!3m2!1ses-419!2ses!4v1665963754208!5m2!1ses-419!2ses"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
