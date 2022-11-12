import React from "react";
import residuosNegras from "../../utils/images/catalogitem-ResiduosNegra.png";
import residuosPatologicos from "../../utils/images/catalogitem-residuospatologicos.png";
import bolsaCamiseta from "../../utils/images/catalogitem-BolsaTipoCamiseta.png";

function CatalogsList({ products }) {
  return (
    <div className="CatalogCardsContainer">
      {/* {products.map((product) => (
        <CatalogsItem key={product.id} product={product} />
      ))} */}
      <div className="CardContainer">
        {/* CATEGORY 1 */}
        <div className="CategoryTitleContainer">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">BOLSAS DE RESIDUOS</p>
          <p className="CategoryTitleContainer__Description">
            Bolsas de polietileno 100% reciclado de baja densidad
          </p>
        </div>
        {/* PRODUCT 1 */}
        <div className="Card">
          <img
            src={residuosNegras}
            alt="Residuos-Negras"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">DE RESIDUOS NEGRAS</p>
            <p className="Card__Info--Description">
              • Formato: en paquetes x10 unidades o por KG • Contamos con una
              Línea Reforzada y una Línea Estándar de acuerdo a tu necesidad. •
              Fabricamos a medida (ancho, largo, espesor)
            </p>
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
          <img
            src={residuosPatologicos}
            alt="Residuos-Negras"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">
              PARA RESIDUOS PATOLÓGICOS Y PELIGROSOS
            </p>
            <p className="Card__Info--Description">
              • Bolsas amarillas, rojas o del color que necesites con o sin
              impresión. • Bolsas amarillas, rojas o del color que necesites con
              o sin impresión.
            </p>
          </div>
        </div>
        {/* CATEGORY 2 */}
        <div className="CategoryTitleContainer">
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

        {/* CATEGORIA FINAL */}
        <div className="CategoryTitleContainer">
          <div className="Orange-Line"></div>
          <p className="CategoryTitleContainer__Title">
            ARTICULOS DESCARTABLES
          </p>
        </div>
        {/* PRODUCT */}
        <div className="Card">
          <img
            src={residuosNegras}
            alt="Residuos-Negras"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">DE RESIDUOS NEGRAS</p>
            <p className="Card__Info--Description">
              • Formato: en paquetes x10 unidades o por KG • Contamos con una
              Línea Reforzada y una Línea Estándar de acuerdo a tu necesidad. •
              Fabricamos a medida (ancho, largo, espesor)
            </p>
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
        {/* PRODUCT */}
        <div className="Card">
          <img
            src={residuosNegras}
            alt="Residuos-Negras"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">DE RESIDUOS NEGRAS</p>
            <p className="Card__Info--Description">
              • Formato: en paquetes x10 unidades o por KG • Contamos con una
              Línea Reforzada y una Línea Estándar de acuerdo a tu necesidad. •
              Fabricamos a medida (ancho, largo, espesor)
            </p>
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
        {/* PRODUCT */}
        <div className="Card">
          <img
            src={residuosNegras}
            alt="Residuos-Negras"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">DE RESIDUOS NEGRAS</p>
            <p className="Card__Info--Description">
              • Formato: en paquetes x10 unidades o por KG • Contamos con una
              Línea Reforzada y una Línea Estándar de acuerdo a tu necesidad. •
              Fabricamos a medida (ancho, largo, espesor)
            </p>
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
        {/* PRODUCT */}
        <div className="Card">
          <img
            src={residuosNegras}
            alt="Residuos-Negras"
            className="Card__Image"
          />
          <div className="Card__Info">
            <p className="Card__Info--Name">DE RESIDUOS NEGRAS</p>
            <p className="Card__Info--Description">
              • Formato: en paquetes x10 unidades o por KG • Contamos con una
              Línea Reforzada y una Línea Estándar de acuerdo a tu necesidad. •
              Fabricamos a medida (ancho, largo, espesor)
            </p>
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
      </div>
    </div>
  );
}

export default CatalogsList;
