import Logo from "/src/assets/logo.png";
import "./styles.css";
import { TbLogout } from "react-icons/tb";
import { GoBell } from "react-icons/go";

function Header() {
  return (
    <div className="container_logo">
      <img src={Logo} alt="" />
      <div className="icons">
        <TbLogout size={30} color="#fffff" />
        <GoBell size={25} color="#fffff" />
      </div>
    </div>
  );
}

export default Header;
