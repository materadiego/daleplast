import residuoNegra from "../../utils/images/ResiduosNegra.png";
import residuoPatologico from "../../utils/images/catalogitem-residuospatologicos.png";

const products = [
  {
    id: 1,
    category: "bolsas de residuos",
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
    category: "bolsas de residuos",
    categoryDescription:
      "Bolsas de polietileno 100% reciclado de baja densidad",
    img: residuoPatologico,
    name: "para residuos patológicos y peligrosos",
    desc: "• Formato: en paquetes x10 unidades o por KG • Contamos con una Línea Reforzada y una Línea Estándar de acuerdo a tu necesidad. • Fabricamos a medida (ancho, largo, espesor)",
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
