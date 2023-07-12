import { ItemCount } from "../../common/ItemCount";
import "./ProductDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = ({ productSelected }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const onAdd = (cantidad) => {
    setQuantityAdded(cantidad);
  };

  return (
    <>
      <div className="card">
        <div className="item-card">
          <h2>{productSelected.title}</h2>
          <img src={productSelected.img} alt="" />
          <p>{productSelected.description}</p>
          <p>Precio:${productSelected.price}</p>
          {quantityAdded > 0 ? (
            <Link to="/cart" className="Option">
              Terminar compra
            </Link>
          ) : (
            <ItemCount
              stock={productSelected.stock}
              initial={1}
              onAdd={onAdd}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
