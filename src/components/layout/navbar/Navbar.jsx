import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
  const { getTotalItems } = useContext(CartContext);
  let totalItems = getTotalItems();

  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dtgaqvham/image/upload/v1685109032/storeMila_y30ier.png"
            alt="imagen logo"
          ></img>
        </Link>

        <ul className={styles.categories}>
          {menuNavigate.map(({ id, path, title }) => (
            // eslint-disable-next-line react/jsx-key
            <button>
              <Link key={id} to={path}>
                {title}
              </Link>
            </button>
          ))}
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={totalItems} color="warning">
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
    <li>
      {" "}
      <img
        src="https://res.cloudinary.com/dtgaqvham/image/upload/v1685109032/storeMila_y30ier.png"
        alt="imagen logo"
      ></img>
    </li>
  </ul>
</div>;
