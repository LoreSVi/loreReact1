import { ItemCount } from "../../common/ItemCount";

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
        <h2>{productSelected.title}</h2>
        <img src={productSelected.img} alt="" />
     
      {productSelected.stock > 0 ? (
        <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
      ) : (
        <h3>No hay stock</h3>
      )}
      </div>
    </>
  );
};

export default ProductDetail;
