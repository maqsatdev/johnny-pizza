import { useDispatch } from "react-redux";
import modalImg from "../../../assets/images/modal-img.png";

// actions
import { setModal } from "../../../redux/actions/modal";
// component
import { Button } from "../../index";

const AuthModal = () => {
  const dispatch = useDispatch();

  const onLinkClick = (e, modalType) => {
    dispatch(setModal({ status: true, type: modalType }));
    e.preventDefault();
  };
  return (
    <div className="form-box form-box__withLeft">
      <div className="form-box__sidebar">
        <h4 className="modal__title text-white text-center">Вход на сайт</h4>
        <div className="form-box__cover">
          <img src={modalImg} alt="alt" />
        </div>
      </div>
      <div className="form-box__content">
        <form className="form">
          <h4 className="modal__title visible-sm">Вход на сайт</h4>
          <div className="form-group">
            <label htmlFor="tel">Телефон</label>
            <input type="text" id="tel" autoComplete="false" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" autoComplete="false" />
          </div>
          <div className="form-group text-center">
            <Button text="Войти" />
          </div>
        </form>
        <ul className="form-box__links">
          <li>
            <a href="#" onClick={(e) => onLinkClick(e, "sign")}>
              Зарегистрироваться
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => onLinkClick(e, "password")}>
              Напомнить пароль
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthModal;
