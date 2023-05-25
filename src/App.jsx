import Navbar from "./components/layout/navbar/Navbar.jsx";
import { ItemListContainer } from "./components/pages/productos/ItemListContainer.jsx";
import { useState } from "react";

const App = () => {
  const [nombre, setNombre] = useState("usuario");
  const [islogued, setIsLogued] = useState(true);

  console.log(islogued);

  let saludo = "Hola";
  return (
    <div>
      <Navbar />
      <ItemListContainer nombre={nombre} saludo={saludo} />
      <button onClick={() => setNombre("Lore")}>Cambiar nombre</button>
      <button onClick={() => setIsLogued(!islogued)}>
        cambiar a {islogued ? "desloguearse" : "loguearse"}
      </button>
    </div>
  );
};

export default App;
