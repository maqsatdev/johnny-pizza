import { useDispatch } from "react-redux";
import modalImg from "../../../assets/images/modal-img.png";

// actions
import { setModal } from "../../../redux/actions/modal";
// component
import { Button } from "../../index";

const AuthModal = () => {
  const dispatch = useDispatch();

  const onSignClick = (e) => {
    dispatch(setModal({ status: true, type: "sign" }));
    e.preventDefault();
  };
  return (
    <div className="form-box form-box__withLeft">
      <div className="form-box__sidebar">
        <h4 className="modal__title text-white text-center">
          Напомнить пароль
        </h4>
        <div className="form-box__cover">
          <img src={modalImg} alt="alt" />
        </div>
        <div className="form-box__buttons text-center">
          <Button
            text="Войти в личный кабинет"
            onClickBtn={() =>
              dispatch(setModal({ status: true, type: "auth" }))
            }
          />
        </div>
      </div>
      <div className="form-box__content">
        <form className="form">
          <h4 className="modal__title visible-sm">Напомнить пароль</h4>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" autoComplete="false" />
          </div>
          <div className="form-group text-center">
            <Button text="Отправить" />
          </div>
          <div className="form-group text-center visible-sm">
            <Button
              text="Войти в личный кабинет"
              onClickBtn={() =>
                dispatch(setModal({ status: true, type: "auth" }))
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
