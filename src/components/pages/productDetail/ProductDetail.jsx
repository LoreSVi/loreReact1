import { ItemCount } from "../../common/ItemCount";
import "./ProductDetail.css";

const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <>
       <div className="card">
        <div className="item-card">
        <h4>{productSelected.title}</h4>
        <img src={productSelected.img} alt="" />
         <p>{productSelected.description}</p>
         <p>${productSelected.price}</p>
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
        <h4>No hay stock</h4>
      )}

    </div>
    </>
  );
};

export default ProductDetail;