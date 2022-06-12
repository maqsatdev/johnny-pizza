import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

// style
import "./Header.css";
// components
import { Button } from "../index";
// actions
import { setModal } from "../../redux/actions/modal";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logotype">
            <img src={Logo} alt="logotype" />
          </Link>
          <Button
            text="Вход"
            type="grey"
            icon="user"
            onClickBtn={() => dispatch(setModal(true))}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
