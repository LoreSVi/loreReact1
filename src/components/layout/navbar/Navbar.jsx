import { BsFillCartCheckFill } from "react-icons/bs";
import "./navbar.module.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        src="https://res.cloudinary.com/dtgaqvham/image/upload/v1684949095/LogoSample_ByTailorBrands_eft7pt.png"
        alt="imagen logo"
      />
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
