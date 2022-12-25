import React from "react";
import residuosNegras from "../../utils/images/catalogitem-ResiduosNegra.png";
import residuosPatologicos from "../../utils/images/catalogitem-residuospatologicos.png";
import bolsaCamiseta from "../../utils/images/catalogitem-BolsaTipoCamiseta.png";
import BolsaDeArranqueOCorte from "../../utils/images/catalogitem-BolsaDeArranqueOCorte.png";
import BolsasConManijaTipoOvaloORinon from "../../utils/images/catalogitem-BolsasConManijaTipoOvaloORinon.png";
import BolsasConManijasFlexibles from "../../utils/images/catalogitem-BolsasConManijasFlexibles.png";
import BolsasParaEnvasadoAlVacio from "../../utils/images/catalogitem-BolsasParaEnvasadoAlVacio.png";
import BolsasParaHielo from "../../utils/images/catalogitem-BolsasParaHielo.png";
import BolsaParaLenaYArena from "../../utils/images/catalogitem-BolsaParaLenaYArena.png";
import BolsaParaSustratoTurba from "../../utils/images/catalogitem-BolsaParaSustratoTurba.png";
import BolsasConCaracteristicasAntiestaticasYOTermoconraibles from "../../utils/images/catalogitem-BolsasConCaracteristicasAntiestaticasYOTermoconraibles.png";
import FilmAgrotilenoDe200MicronesCristalONegro from "../../utils/images/catalogitem-FilmAgrotilenoDe200MicronesCristalONegro.png";
import FilmStretch from "../../utils/images/catalogitem-FilmStretch.png";
import BandejasYObleasExpandido from "../../utils/images/catalogitem-BandejasYObleasExpandido.png";
import CintaDeEmbalarTransparente from "../../utils/images/catalogitem-CintaDeEmbalarTransparente.png";
import LaminasFolexSeparadorasAD from "../../utils/images/catalogitem-LaminasFolexSeparadorasAD.png";
import FilmAptoParaAlimentos from "../../utils/images/catalogitem-FilmAptoParaAlimentos.png";

function CatalogsList({ products }) {
  return (
    <div className="CatalogCardsContainer">
      <div className="CardContainer">
        {/* CATEGORY 1 */}
        <div className="CategoryTitleContainer" id="1">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">BOLSAS DE RESIDUOS</p>
          <p className="CategoryTitleContainer__Description">
            Bolsas de polietileno 100% reciclado de baja densidad
          </p>
        </div>
        {/* PRODUCT 1 */}
        <div className="Card">
          <div className="Card__DesktopImage ResiduosNegra"></div>
          <img
            src={residuosNegras}
            alt="Residuos-Negras"
            className="Card__Image MobileCardImage"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">DE RESIDUOS NEGRAS</p>
            <div className="Card__Info--Description">
              <p>• Formato: en paquetes x10 unidades o por KG</p>
              <p>
                • Contamos con una Línea Reforzada y una Línea Estándar de
                acuerdo a tu necesidad.
              </p>
              <p> • Fabricamos a medida (ancho, largo, espesor)</p>
            </div>
            <div className="Card__Info--StockInfo">
              <p className="StockInfo-Title">
                Stock permanente de medidas estándar:
              </p>
              <p className="StockInfo-Measures">
                50x70, 60x90, 75x100 y 90x110.
              </p>
            </div>
          </div>
        </div>
        {/* PRODUCT 2 */}
        <div className="Card">
          <div className="Card__DesktopImage ResiduosPato"></div>

          <img
            src={residuosPatologicos}
            alt="Residuos-Negras"
            className="Card__Image MobileCardImage"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">
              PARA RESIDUOS PATOLÓGICOS Y PELIGROSOS
            </p>
            <div className="Card__Info--Description">
              <p>
                {" "}
                • Bolsas amarillas, rojas o del color que necesites con o sin
                impresión.
              </p>
              <p>
                {" "}
                • Bolsas amarillas, rojas o del color que necesites con o sin
                impresión.
              </p>
            </div>
          </div>
        </div>
        {/* CATEGORY 2 */}
        <div className="CategoryTitleContainer" id="2">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">BOLSAS TIPO CAMISETA</p>
          <p className="CategoryTitleContainer__Description">
            Bolsas tipo camiseta de polietileno de alta o baja densidad con o
            sin impresión.
          </p>
        </div>
        {/* PRODUCT 3 */}
        <div className="Card2">
          <img
            src={bolsaCamiseta}
            alt="Bolsa-tipo-camiseta"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos colores y medidas personalizadas (ancho, largo y
              espesor)
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">
                Stock permanente de medidas estándar sin impresión:{" "}
              </p>
              <p className="StockInfo2-Measures">
                30x40, 40x50, 50x60 y 60x70.
              </p>
            </div>
          </div>
        </div>
        {/* CATEGORY 3 */}
        <div className="CategoryTitleContainer" id="3">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            BOLSAS DE ARRANQUE O DE CORTE:
          </p>
          <p className="CategoryTitleContainer__Description">
            Bolsas de arranque de polietileno de alta o baja densidad con o sin
            impresión. Ideales para productos panificados, pre-pizzas, pan de
            panchos y hamburguesas, carnes, verduras y frutas.
          </p>
        </div>
        {/* PRODUCT 4 */}
        <div className="Card2">
          <img
            src={BolsaDeArranqueOCorte}
            alt="bolsa-de-arranque-o-de-corte"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos colores y medidas personalizadas (ancho, largo y
              espesor)
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">
                Stock permanente de medidas estándar sin impresión::{" "}
              </p>
              <p className="StockInfo2-Measures">
                15x20, 20x30, 25x35, 30x40, 35x45, 40x50 y 50x70.
              </p>
            </div>
          </div>
        </div>
        {/* CATEGORY 4 */}
        <div className="CategoryTitleContainer" id="4">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            BOLSAS CON MANIJA TIPO ÓVALO O RIÑON:
          </p>
          <p className="CategoryTitleContainer__Description">
            Bolsas con manija tipo óvalo o riñon de polietileno de alta o baja
            densidad con o sin impresión.
          </p>
        </div>
        {/* PRODUCT 5 */}
        <div className="Card2">
          <img
            src={BolsasConManijaTipoOvaloORinon}
            alt="bolsas-con-manija-tipo-ovalo-o-rinon"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos colores y medidas personalizadas (ancho, largo y
              espesor).
              <br /> • Pueden ser bolsas tubo o con fuelles según la necesidad.
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Fabricación a pedido. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>
        {/* CATEGORY 5 */}
        <div className="CategoryTitleContainer" id="5">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            BOLSAS CON MANIJAS FLEXIBLES:
          </p>
          <p className="CategoryTitleContainer__Description">
            Bolsas con manijas flexibles de polietileno de baja densidad con o
            sin impresión.
          </p>
        </div>
        {/* PRODUCT 6 */}
        <div className="Card2">
          <img
            src={BolsasConManijasFlexibles}
            alt="bolsas-con-manijas-flexibles"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos colores y medidas personalizadas (ancho, largo y
              espesor).
              <br /> • Pueden ser bolsas tubo o con fuelles según la necesidad.
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Fabricación a pedido. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>
        {/* CATEGORY 6 */}
        <div className="CategoryTitleContainer" id="6">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            BOLSAS PARA ENVASADO AL VACÍO:
          </p>
          <p className="CategoryTitleContainer__Description">
            Bolsas para envasado al vacío de polietileno virgen de baja densidad
            apto para alimentos, con o sin impresión.
          </p>
        </div>
        {/* PRODUCT 7 */}
        <div className="Card2">
          <img
            src={BolsasParaEnvasadoAlVacio}
            alt="bolsas-para-envasado-al-vacio"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos medidas personalizadas (ancho, largo y espesor) con
              soldadura reforzada.
              <br /> • Máxima conservación de alimentos frescos, ideal para
              carnes, embutidos, quesos, frutas y verduras.
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Fabricación a pedido. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>
        {/* CATEGORY 7 */}
        <div className="CategoryTitleContainer" id="7">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">BOLSAS PARA HIELO:</p>
          <p className="CategoryTitleContainer__Description">
            Bolsas de polietileno de baja densidad impresas con tu logo.
            Fabricación 100% a medida según tu necesidad.
          </p>
        </div>
        {/* PRODUCT 8 */}
        <div className="Card2">
          <img
            src={BolsasParaHielo}
            alt="bolsas-para-hielo"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos colores y medidas personalizadas (ancho, largo y
              espesor).
              <br /> • Fabricamos medidas personalizadas a partir de 15 kg.
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Fabricación a pedido. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>
        {/* CATEGORY 8 */}
        <div className="CategoryTitleContainer" id="8">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            BOLSAS PARA LEÑA Y ARENA:
          </p>
          <p className="CategoryTitleContainer__Description">
            Bolsas de polietileno de baja densidad para el almacenamiento y
            comercialización de diferentes productos: fabricación 100% a medida
            según tu necesidad.
          </p>
        </div>
        {/* PRODUCT 9 */}
        <div className="Card2">
          <img
            src={BolsaParaLenaYArena}
            alt="bolsas-para-lena-y-arena"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos colores y medidas personalizadas (ancho, largo y
              espesor).
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Fabricación a pedido. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>
        {/* CATEGORY 9 */}
        <div className="CategoryTitleContainer" id="9">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            BOLSAS PARA TIERRA, SUSTRATO Y TURBA:
          </p>
          <p className="CategoryTitleContainer__Description">
            Bolsas de polietileno de baja densidad para el almacenamiento y
            comercialización de diferentes productos: fabricación 100% a medida
            según tu necesidad.
          </p>
        </div>
        {/* PRODUCT 10 */}
        <div className="Card2">
          <img
            src={BolsaParaSustratoTurba}
            alt="bolsas-para-tierra-sustrato-y-turba"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos colores y medidas personalizadas (ancho, largo y
              espesor).
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Fabricación a pedido. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>
        {/* CATEGORY 10 */}
        <div className="CategoryTitleContainer" id="10">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            BOLSAS CON CARACTERÍSTICAS ANTIESTÁTICAS Y/O TERMOCONTRAIBLES:
          </p>
          <p className="CategoryTitleContainer__Description"></p>
        </div>
        {/* PRODUCT 11 */}
        <div className="Card2">
          <img
            src={BolsasConCaracteristicasAntiestaticasYOTermoconraibles}
            alt="bolsas-con-caracteristicas-antiestaticas-y/o-termocontraibles"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Fabricamos colores y medidas personalizadas (ancho, largo y
              espesor).
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Fabricación a pedido. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>
        {/* CATEGORY 11 */}
        <div className="CategoryTitleContainer" id="11">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            FILM AGROTILENO DE 200 MICRONES CRISTAL O NEGRO:
          </p>
          <p className="CategoryTitleContainer__Description">
            Film de polietileno de baja densidad en 200 micrones, negro o
            cristal para múltiples usos: agro, construcción e industria.
          </p>
        </div>
        {/* PRODUCT 12 */}
        <div className="Card2">
          <img
            src={FilmAgrotilenoDe200MicronesCristalONegro}
            alt="film-agrotileno-de-200-micrones-cristal-o-negro"
            className="Card2__Image"
          />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Reforzado con PE lineal para mayor elasticidad y resistencia,
              100% impermeabilizante y aislante, posee tratamiento UV.
              <br /> • Presentación: Bobina de 4 mts de ancho x 50 mts de largo.
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Stock permanente. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>
        {/* CATEGORY 12 */}
        <div className="CategoryTitleContainer" id="12">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">FILM STRETCH:</p>
          <p className="CategoryTitleContainer__Description">
            Film stretch de polietileno lineal virgen en 20 micrones. Máxima
            elasticidad y rendimiento para embalaje y paletizado.
          </p>
        </div>
        {/* PRODUCT 13 */}
        <div className="Card2">
          <img src={FilmStretch} alt="film-stretch" className="Card2__Image" />
          <div className="Card2__Info">
            <p className="Card2__Info--Description">
              • Máxima elasticidad y rendimiento para el embalaje.
              <br /> • Presentación: Bobina de 50cm x 800 mts. de largo.
            </p>
            <div className="Card2__Info--StockInfo">
              <p className="StockInfo2-Title">Stock permanente. </p>
              <p className="StockInfo2-Measures"></p>
            </div>
          </div>
        </div>

        {/* CATEGORIA 13 */}
        <div className="CategoryTitleContainer" id="13">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            ARTICULOS DESCARTABLES
          </p>
        </div>
        {/* PRODUCT 14 */}
        <div className="Card">
          <img
            src={BandejasYObleasExpandido}
            alt="bandejas-y-obleas-expandido"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">BANDEJAS Y OBLEAS EXPANDIDO</p>
            <div className="Card__Info--Description">
              <p>
                • Medidas estándar: 615, 617, 618, 619 bandejas expandido. 618 y
                619 obleas expandido.
              </p>
            </div>
            <div className="Card__Info--StockInfo">
              <p className="StockInfo-Title">Stock permanente.</p>
              <p className="StockInfo-Measures"></p>
            </div>
          </div>
        </div>
        {/* PRODUCT 15 */}
        <div className="Card">
          <img
            src={CintaDeEmbalarTransparente}
            alt="cinta-de-embalar-transparente"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">CINTA DE EMBALAR TRANSPARENTE</p>
            <div className="Card__Info--Description">
              <p>
                {" "}
                • Medidas estándar: 20 x 25 / 25 x 25 • Por paquete de 1kg.
              </p>
            </div>
            <div className="Card__Info--StockInfo">
              <p className="StockInfo-Title">Stock permanente.</p>
              <p className="StockInfo-Measures"></p>
            </div>
          </div>
        </div>
        {/* PRODUCT 16 */}
        <div className="Card">
          <img
            src={LaminasFolexSeparadorasAD}
            alt="laminas-folex-separadoras-ad"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">LÁMINAS FOLEX SEPARADORAS AD</p>
            <div className="Card__Info--Description">
              <p>
                {" "}
                • Medidas estándar: 20 x 25 / 25 x 25 • Por paquete de 1kg.
              </p>
            </div>
            <div className="Card__Info--StockInfo">
              <p className="StockInfo-Title">Stock permanente.</p>
              <p className="StockInfo-Measures"></p>
            </div>
          </div>
        </div>
        {/* PRODUCT 17 */}
        <div className="Card">
          <img
            src={FilmAptoParaAlimentos}
            alt="film-apto-para-alimentos"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">FILM APTO PARA ALIMENTOS</p>
            <div className="Card__Info--Description">
              <p>
                {" "}
                • Rolopac Rollo de 38cm de ancho x 900 mt Rollo de 45cm de ancho
                x 900 mt
              </p>
              <p>
                {" "}
                • Resinite Rollo de 38cm de ancho x 1000 mt Rollo de 45cm de
                ancho x 1000 mt
              </p>
            </div>
            <div className="Card__Info--StockInfo">
              <p className="StockInfo-Title">Stock permanente.</p>
              <p className="StockInfo-Measures"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatalogsList;
