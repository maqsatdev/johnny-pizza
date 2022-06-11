import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

// actions
import { setModal } from "../redux/actions/modal";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="logotype">
            <img src={Logo} alt="logotype" />
          </Link>
          <button
            className="btn btn-grey"
            onClick={() => dispatch(setModal(true))}
          >
            <i className="fa fa-user" aria-hidden="true"></i>
            <span className="text">Вход</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
