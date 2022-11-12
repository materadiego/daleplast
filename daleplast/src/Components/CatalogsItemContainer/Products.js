import residuoNegra from "../../utils/images/catalogitem-ResiduosNegra.png";
import residuoPatologico from "../../utils/images/catalogitem-residuospatologicos.png";
import BolsaTipoCamiseta from "../../utils/images/catalogitem-BolsaTipoCamiseta.png";
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

const products = [
  {
    id: 1,
    category: "BOLSAS DE RESIDUOS",
    categoryDescription:
      "Bolsas de polietileno 100% reciclado de baja densidad",
    img: residuoNegra,
    name: "de residuos negras",
    desc: "• Formato: en paquetes x10 unidades o por KG • Contamos con una Línea Reforzada y una Línea Estándar de acuerdo a tu necesidad. • Fabricamos a medida (ancho, largo, espesor)",
    stockTitle: "Stock permanente de medidas estándar:",
    stockMedidas: " 50x70, 60x90, 75x100 y 90x110.",
  },
  {
    id: 2,
    img: residuoPatologico,
    name: "para residuos patológicos y peligrosos",
    desc: "• Formato: en paquetes x10 unidades o por KG • Contamos con una Línea Reforzada y una Línea Estándar de acuerdo a tu necesidad. • Fabricamos a medida (ancho, largo, espesor)",
  },
  {
    id: 3,
    category: "BOLSA TIPO CAMISETA",
    categoryDescription:
      "Bolsas tipo camiseta de polietileno de alta o baja densidad con o sin impresión",
    img: BolsaTipoCamiseta,
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor)",
    stockTitle: "Stock permanente de medidas estándar sin impresión: ",
    stockMedidas: " 30x40, 40x50, 50x60 y 60x70.",
  },
  {
    id: 4,
    category: "BOLSAS DE ARRANQUE O CORTE",
    categoryDescription:
      "Bolsas de arranque de polietileno de alta o baja densidad con o sin impresión. Ideales para productos panificados, pre-pizzas, pan de panchos y hamburguesas, carnes, verduras y frutas.",
    img: BolsaDeArranqueOCorte,
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor)",
    stockTitle: "Stock permanente de medidas estándar sin impresión:",
    stockMedidas: "15x20, 20x30, 25x35, 30x40, 35x45, 40x50 y 50x70.",
  },
  {
    id: 5,
    category: "BOLSAS CON MANIJA TIPO ÓVALO O RIÑON",
    categoryDescription:
      "Bolsas con manija tipo óvalo o riñón de plietileno de alta o baja densidad con o sin impresión.",
    img: BolsasConManijaTipoOvaloORinon,
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor) • Pueden ser bolsas tubo o con fuelles según la necesidad.",
    stockTitle: "Fabricación a pedido.",
  },
  {
    id: 6,
    category: "BOLSAS CON MANIJAS FLEXIBLES",
    categoryDescription:
      "Bolsas con manijas flexibles de polietileno de baja densidad con o sin impresión",
    img: BolsasConManijasFlexibles,
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor) • Pueden ser bolsas tubo o con fuelles según la necesidad",
    stockTitle: "Fabricación a pedido",
  },
  {
    id: 7,
    category: "BOLSAS PARA ENVASADO AL VACÍO",
    categoryDescription:
      "Bolsas para envasado al vacío de polietileno virgen de baja densidad apto para alimentos, con o sin impresión.",
    img: BolsasParaEnvasadoAlVacio,
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor) con soldadura reforzada. • Máxima conservación de alimentos frescos, ideal para carnes, embutidos, quesos, frutas y verduras.",
    stockTitle: "Fabricación a pedido",
  },
  {
    id: 8,
    category: "PARA ALMACENAR Y COMERCIALIZAR PRODUCTOS",
    categoryDescription:
      "Bolsas de polietileno de baja densidad impresas con tu logo. Fabricación 100% a medida según necesidad.",
    img: BolsasParaHielo,
    name: "BOLSAS PARA HIELO",
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor). • Fabricamos medidas personalizadas a partir de 15kg.",
    stockTitle: "Fabricación a pedido",
  },
  {
    id: 9,
    img: BolsaParaLenaYArena,
    name: "BOLSAS PARA LEÑA Y ARENA",
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor).",
    stockTitle: "Fabricación a pedido",
  },
  {
    id: 10,
    img: BolsaParaSustratoTurba,
    name: "BOLSAS PARA SUSTRATO/TURBA",
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor).",
    stockTitle: "Fabricación a pedido",
  },
  {
    id: 11,
    category: "BOLSAS CON CARACTERÍSTICAS ANTIESTÁTICAS Y/O TERMOCONTRAIBLES",
    img: BolsasConCaracteristicasAntiestaticasYOTermoconraibles,
    desc: "• Fabricamos colores y medidas personalizadas (ancho, largo y espesor) con soldadura reforzada.",
    stockTitle: "Fabricación a pedido",
  },
  {
    id: 12,
    category: "FILM AGROTILENO DE 200 MICRONES CRISTAL O NEGRO",
    categoryDescription:
      "Film de polietileno de baja densidad en 200 micrones, negro o cristal para múltiples usos: agro, construcción e industria.",
    img: FilmAgrotilenoDe200MicronesCristalONegro,
    desc: "• Reforzado con PE lineal para mayor elasticidad y resistencia, 100% impermeabilizante y aislante, posee tratamiento UV. • Presentación: Bobina de 4 mts de ancho x 50 mts de largo.",
    stockTitle: "Stock permanente",
  },
  {
    id: 13,
    category: "FILM STRETCH",
    categoryDescription:
      "Film stretch de polietileno lineal virgen en 20 micrones. Máxima elasticidad y rendimiento para embalaje y paletizado.",
    img: FilmStretch,
    desc: "• Máxima elasticidad y rendimiento para el embalaje. • Presentación: Bobina de 50cm x 800 mts. de largo.",
    stockTitle: "Fabricación a pedido",
  },
  {
    id: 14,
    category: "ARTÍCULOS DESCARTABLES",
    img: BandejasYObleasExpandido,
    name: "BANDEJAS Y OBLEAS EXPANDIDO",
    desc: "• Medidas estándar: 615, 617, 618, 619 bndejas expandido. • 618 y 619 obleas expandido.",
    stockTitle: "Stock permanente.",
  },
  {
    id: 15,
    img: CintaDeEmbalarTransparente,
    name: "CINTA DE EMBALAR TRANSPARENTE",
    desc: "• Medidas estándar: 48mm x 50 mts • Por unidad o por caja de 72 unidades.",
    stockTitle: "Stock permanente.",
  },
  {
    id: 16,
    img: LaminasFolexSeparadorasAD,
    name: "LÁMINAS FOLEX SEPARADORAS AD",
    desc: "• Medidas estándar: 20x25/25x25 • Por paquete de 1kg.",
    stockTitle: "Stock permanente.",
  },
  {
    id: 17,
    img: FilmAptoParaAlimentos,
    name: "FILM APTO PARA ALIMENTOS",
    desc: "• Rolopac Rollo de 38cm de ancho x 900mt Rollo de 45cm de ancho x 900mt • Resinite Rollo de 38cm de ancho x 1000mt Rollo de 45cm de ancho x 1000mt",
    stockTitle: "Stock permanente.",
  },
];

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productosFiltrados = products.filter(
      (producto) => producto.category === categoryId
    );
    setTimeout(() => {
      if (categoryId) {
        resolve(productosFiltrados);
      } else {
        resolve(products);
      }
    }, 2000);
  });
};
