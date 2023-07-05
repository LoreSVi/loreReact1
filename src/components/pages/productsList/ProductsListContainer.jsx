import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { products } from "../../../productsMock";
import { useParams } from "react-router";
import {HashLoader} from "react-spinners";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();
  console.log(items.length);
  useEffect(() => {
    let productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((rechazo) => {
        console.log(rechazo);
      });
  }, [categoryName]);

  //if (items.length === 0){
  //  return <h1> Cargando...</h1>
  //}
  return (
    <div>
      {items.length > 0 ? (
        <ProductsListPresentacional items={items} />
      ) : (
        <HashLoader color="#36d7b7" />
      )}
    </div>
  );
};

export default ProductsListContainer;
