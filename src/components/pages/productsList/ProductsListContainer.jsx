import { useEffect, useState } from "react";
import ProductsListPresentacional from "./ProductsListPresentacional";
import { useParams } from "react-router";
import { HashLoader } from "react-spinners";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductsListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(db, "products");
    let consulta;

    if (categoryName) {
   
      consulta = query(itemCollection, where("category", "==", categoryName));
    } else {
    
      consulta = itemCollection;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));

  }, [categoryName]);

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