import { useState } from "react";

const Form = () => {
  
  const [name, setName] = useStateate("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (evento) => {
     evento.preventDefault()

     //mandarle info al back- para loguearme
  };

  const handleName = (evento) =>{
    console.log(evento.target.value)
  };
  
  const handleLastName = (evento) = {

  }

  return (
    <div>
      <h2>Este es el formulario</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Ingrese su nombre" name="name"
          onChange={handleName}
        />
        <input
          type="text" placeholder="Ingrese su apellido" name="lastName"
          onChange={handleLastName}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
