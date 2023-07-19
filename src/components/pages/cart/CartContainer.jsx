import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import Cart from "./cart";

const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice, getTotalItems } =
    useContext(CartContext);

  let total = getTotalPrice();
  let totalItems = getTotalItems();

  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito limpio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <Cart
        total={total}
        limpiar={limpiar}
        cart={cart}
        removeById={removeById}
        totalItems={totalItems}
      />
    </div>
  );
};

export default CartContainer;