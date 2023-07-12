import { ItemCount } from "../../common/ItemCount";
import "./ProductDetail.css";

const ProductDetail = ({ productSelected }) => {
  const onAdd = (cantidad) => {
    let data = {
      ...productSelected,
      quantity: cantidad,
    };

    console.log(data);
  };

  return (
    <>
      <div className="card">
        <div className="item-card">
          <h2>{productSelected.title}</h2>
          <img src={productSelected.img} alt="" />
          <p>{productSelected.description}</p>
          <p>Precio:${productSelected.price}</p>
          {productSelected.stock > 0 ? (
            <ItemCount
              stock={productSelected.stock}
              initial={1}
              onAdd={onAdd}
            />
          ) : (
            <h3>No hay stock</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
