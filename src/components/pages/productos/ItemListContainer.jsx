
// eslint-disable-next-line react/prop-types
export const ItemListContainer = ({nombre, saludo}) => {
  return (
    <>
      <h1> Lista de productos</h1>
      <h3>
        {saludo} {nombre}
      </h3>
    </>
  );
};
