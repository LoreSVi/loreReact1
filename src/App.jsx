import Navbar from "./components/layout/navbar/Navbar.jsx";
import { ItemListContainer } from "./components/pages/productos/ItemListContainer.jsx";
import { useState } from "react";
const App = () => {
   const[nombre, setNombre] = useState("lore");

  return (
    <div>
      <Navbar />
      <ItemListContainer nombre={nombre} apellido={apellido}/>
      <buttom onClick={() = setNombre("usted")}>Cambiar nombre</buttom>
    </div>
  );
};

export default App;
