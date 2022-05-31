import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logotype">
            <img src={Logo} alt="logotype" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
