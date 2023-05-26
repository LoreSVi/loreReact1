import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
       <div>
       <ul>
   <li> <img
        src="https://res.cloudinary.com/dtgaqvham/image/upload/v1685105298/DogStoreMilaLogosm_bdlz7e.png"
        alt="imagen logo"
      /></li>  
          <li>Alimento y Snacks</li>
          <li>Higiene</li>
          <li>Juguetes</li>
          <li>Pulguisidas</li>
          <li>
            {" "}
            <BsFillCartCheckFill color="#b22222" size="23px" />
            <span>1</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
