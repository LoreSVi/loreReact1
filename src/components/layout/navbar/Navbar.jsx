
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">DogShop
        <img
        src="https://res.cloudinary.com/dtgaqvham/image/upload/v1685109032/storeMila_y30ier.png"
        alt="imagen logo"></img>
        </Link>
        <ul className={styles.categories}>
          <Link to="/">Limpiar filtros</Link>
          <Link to="/category/alimentoySnacks">Alimento y Snacks</Link>
          <Link to="/category/higiene">Higiene</Link>
          <Link to="/category/juguetes">Juguetes</Link>
          <Link to="/category/pulguisidas">Pulguisidas</Link>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={2} color="secondary">
            <BsFillCartCheckFill size="30px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

     
     <div>
       <ul>
   <li> <img
        src="https://res.cloudinary.com/dtgaqvham/image/upload/v1685109032/storeMila_y30ier.png"
        alt="imagen logo"></img>
          </li>
        </ul>
      </div>
  