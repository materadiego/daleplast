import React from "react";
import LogoFooter from "../../utils/images/LogoFooter.svg";
import phoneIcon from "../../utils/images/footer-phoneicon.svg";
import wspIcon from "../../utils/images/footer-wspicon.svg";
import mailIcon from "../../utils/images/footer-mailicon.svg";
import fbIcon from "../../utils/images/footer-fbicon.svg";
import igIcon from "../../utils/images/footer-igicon.svg";
import inIcon from "../../utils/images/footer-inicon.svg";
import mapIcon from "../../utils/images/footer-mapicon.svg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-Container">
        <div className="Footer-SubContainer1">
          <img src={LogoFooter} alt="Logo-Footer" className="Footer-Logo" />
          <div className="Green-Line Green-Line__Logo"></div>
          <div className="Footer-Contact">
            <p className="Footer-Title">CONTACTANOS</p>
            <div className="Footer-Contact__Data">
              <div className="Footer-Contact__Data--Image Phone">
                <img src={phoneIcon} alt="Phone"></img>
              </div>
              <p className="Footer-Contact__Data--txt">(2964)431328</p>
            </div>
            <div className="Footer-Contact__Data">
              <div className="Footer-Contact__Data--Image Whatsapp">
                {" "}
                <img src={wspIcon} alt="WhatsApp"></img>
              </div>
              <p className="Footer-Contact__Data--txt">
                (2964)503046
                <br />
                (2964)503045
              </p>
            </div>
            <div className="Footer-Contact__Data">
              <div className="Footer-Contact__Data--Image Mail">
                <img src={mailIcon} alt="Mail"></img>
              </div>
              <p className="Footer-Contact__Data--txt">
                administracion@daleplast.com.ar
              </p>
            </div>
          </div>
        </div>
        <div className="Green-Line"></div>
        <div className="Footer-SubContainer2">
          <div className="Footer-Redes">
            <p className="Footer-Title">SEGUINOS EN NUESTRAS REDES</p>
            <a
              style={{ textDecoration: "inherit" }}
              href="https://www.facebook.com/daleplastbolsas"
              target="_blank"
              rel="noreferrer"
              className="Footer-Redes__Facebook"
            >
              <img
                src={fbIcon}
                alt="Facebook"
                className="Footer-Redes__Facebook--Image"
              ></img>
              <p className="Footer-Redes-DesktopText">Facebook</p>
            </a>
            <a
              style={{ textDecoration: "inherit" }}
              href="https://www.instagram.com/daleplastbolsas/"
              target="_blank"
              rel="noreferrer"
              className="Footer-Redes__Instagram"
            >
              <img
                src={igIcon}
                alt="Instagram"
                className="Footer-Redes__Instagram--Image"
              ></img>
              <p className="Footer-Redes-DesktopText">Instagram</p>
            </a>
            <a
              style={{ textDecoration: "inherit" }}
              href="https://www.linkedin.com/company/daleplast-srl/?originalSubdomain=ar"
              target="_blank"
              rel="noreferrer"
              className="Footer-Redes__Linkedin"
            >
              <img
                src={inIcon}
                alt="LinkedIn"
                className="Footer-Redes__Linkedin--Image"
              ></img>
              <p className="Footer-Redes-DesktopText">Linkedin</p>
            </a>
          </div>
          <div className="Green-Line"></div>
          <div className="Footer-Maps">
            <p className="Footer-Title">NUESTRAS OFICINAS</p>
            <div className="Footer-Maps__Image">
              <img
                src={mapIcon}
                alt="Mapicon"
                className="Footer-Maps__Image--img"
              ></img>
            </div>
            <p className="Footer-Maps__txt">Islas Malvinas 2159</p>
            <iframe
              title="Map"
              className="Footer-Maps__Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.9231750007243!2d-67.73177568417586!3d-53.790854880074555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbc4b167a16512a73%3A0xab3fb687a7682620!2sDALEPLAST%20-%20Bolsas%20de%20Polietileno%20Oxi-Biodegradables!5e0!3m2!1ses-419!2ses!4v1665963754208!5m2!1ses-419!2ses"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
