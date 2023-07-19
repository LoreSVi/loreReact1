import { ItemCount } from "../../common/ItemCount";
import "./ProductDetail.css";

const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <>
       <div className="card">
        <div className="item-card">
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
        <h4>{productSelected.price}</h4>
        <h4>{productSelected.description}</h4>
     </div>
      {productSelected.stock > 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ItemCount
            stock={productSelected.stock}
            onAdd={onAdd}
            initial={cantidad}
          />
        </div>
      ) : (
        <h2>No hay stock</h2>
      )}

    </div>
    </>
  );
};

export default ProductDetail;