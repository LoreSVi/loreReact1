import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="nav">
     
      <ul>
      <li> <img
        src="https://res.cloudinary.com/dtgaqvham/image/upload/v1684949095/LogoSample_ByTailorBrands_eft7pt.png"
        alt="imagen logo"
      />   </li>
        <li>Alimento y Snacks</li>
        <li>Higiene</li>
        <li>Juguetes</li>
        <li>Pulguisidas</li>
       <li> <BsFillCartCheckFill color="purple" size="23px" />
      <span>1</span>
    </li>
      </ul>
     
    </div>
  );
};

export default Navbar;
