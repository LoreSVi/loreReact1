import { ItemCount } from "../../common/ItemCount";
import "./ProductDetail.css";


const ProductDetail = ({ productSelected, cantidad, onAdd }) => {
  return (
    <>
       <div className="card">
        <div className="item-card">
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
     </div>
    
      <ItemCount
        stock={productSelected.stock}
        initial={cantidad}
        onAdd={onAdd}
        />
      </div>
    </>
  );
};

export default ProductDetail;