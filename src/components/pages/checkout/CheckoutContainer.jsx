import Checkout from "./Checkout";
import {useFormik} from "formik";
import * as Yup from "yup"
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { green } from "@mui/material/colors";


const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit: (data) => {
      

      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(db, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });


      clearCart();
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Este campo debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("Este campo no corresponde a un email valido")
        .required("Este campo es obligatorio"),
      phone: Yup.string()
        .required("Este campo es obligatorio")
        .min(10, "El telefono no cumple los requisitos"),
    }),
  });

  return (
    <div className="maincontainer" style={{backgroundColor: "rgb(125, 136, 41)"}}>
      {orderId ? (
         <div className="compraOk" style={{display:"flex", flexDirection:"column", alignItems:"center"}} >
         <img style={{width:"150px"}} src="https://res.cloudinary.com/dtgaqvham/image/upload/v1689859539/regaloperrito_aq3cei.png"></img>
        <h4>Gracias por elegirnos!
        <br/>
       <br/>
         Su compra fue exitosa, el numero de comprobante es: {orderId}
         </h4>
         </div>
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};


export default CheckoutContainer