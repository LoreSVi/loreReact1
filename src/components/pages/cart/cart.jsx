import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart, limpiar, removeById, total, totalItems }) => {
  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <h4>${item.price}.-</h4>
                  <h4>Unidades: {item.quantity}</h4>
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h3>Descripcion del carrito:</h3>
          <h5>Cantidad de productos: {totalItems}</h5>
          <h5>Precio total: {total}</h5>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <Button onClick={limpiar} variant="contained" color="secondary">
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="contained" color="secondary">
                  Finalizar compra
                </Button>
              </Link>
              <Link to="/">
                <Button variant="contained" color="secondary">
                  Seguir comprando
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="contained" color="secondary">
                Agrega productos
              </Button>
            </Link>
          )}

          <h5>El total del carrito es ${total}</h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;
