import React from "react";
import { useEffect, useState } from "react";
import CatalogsItem from "../CatalogsItem/CatalogsItem";
import CatalogsList from "../CatalogsList/CatalogsList";
import Products from "./Products";

const CatalogsItemContainer = () => {
  const [Items, setItems] = useState([]);

  let isOk = true;
  const customFetch = (time, task) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isOk) {
          resolve(task);
        } else {
          reject("error");
        }
      }, time);
    });
  };
  useEffect(() => {
    customFetch(1000, Items)
      .then((result) => setItems(result))
      .catch((error) => console.log(error));
  }, [Items]);

  return (
    <div className="ContainerProducts">
      <CatalogsList Products={Items} />
    </div>
  );
};

export default CatalogsItemContainer;
