import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className nav>
      <h1>DogStore Mila</h1>
      <ul>
        <li>Alimento y Snacks</li>
        <li>Higiene</li>
        <li>Juguetes</li>
        <li>Pulguisidas</li>
      </ul>
      <BsFillCartCheckFill color="purple" size="23px" />
      <span>1</span>
    </div>
  );
};

export default Navbar;
