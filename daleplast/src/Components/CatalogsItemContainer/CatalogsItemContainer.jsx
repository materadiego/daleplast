import React from "react";
import { getProducts } from "./Products";
import { useEffect, useState } from "react";
import CatalogsList from "../CatalogsList/CatalogsList";
import loader from "../../utils/images/loader.svg";

import { useParams } from "react-router-dom";

const CatalogsItemContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId)
      .then((res) => setProducts(res))
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="ContainerProducts">
      {loading ? (
        <img src={loader} alt="loader" className="Catalog-Loader" />
      ) : (
        <CatalogsList products={products} />
      )}
    </div>
  );
};

export default CatalogsItemContainer;
