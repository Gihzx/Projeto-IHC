import Logo from "/src/assets/logo.png";
import Button from "../UI/Button";
import "./styles.css";
("react-router-dom");

function Header() {
  return (
    <>
      <div className="container_logo">
        <img src={Logo} alt="" />
        <a href="/">
          <Button>Logout</Button>
        </a>
      </div>
    </>
  );
}

export default Header;
