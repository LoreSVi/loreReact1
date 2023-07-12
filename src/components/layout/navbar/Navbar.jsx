
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">
        <img
        src="https://res.cloudinary.com/dtgaqvham/image/upload/v1685109032/storeMila_y30ier.png"
        alt="imagen logo"></img>
        </Link>
        <ul className={styles.categories}>
         <button><Link to="/">Limpiar filtros</Link></button> 
         <button><Link to="/category/alimentoySnacks">Alimento y Snacks</Link></button>
         <button><Link to="/category/higiene">Higiene</Link></button>
         <button><Link to="/category/juguetes">Juguetes</Link></button>
         <button><Link to="/category/pulguisidas">Pulguisidas</Link></button>
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={2} color="warning">
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
  