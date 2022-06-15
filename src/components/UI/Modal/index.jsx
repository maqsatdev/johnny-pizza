import React from "react";
import { useDispatch, useSelector } from "react-redux";

//style
import "./Modal.css";
//actions
import { setModal } from "../../../redux/actions/modal";
//components
import AuthModal from "./AuthModal";
import SignModal from "./SignModal";
import PasswordModal from "./PasswordModal";

const Modal = ({ active }) => {
  const modalType = useSelector(({ modal }) => modal.type);

  const dispatch = useDispatch();

  const renderModal = () => {
    if (modalType === "auth") {
      return <AuthModal />;
    }
    if (modalType === "sign") {
      return <SignModal />;
    }
    if (modalType === "password") {
      return <PasswordModal />;
    }
    return "ничего нет";
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => dispatch(setModal({ status: false }))}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">{renderModal()}</div>
        <i
          className="modal__close"
          onClick={() => dispatch(setModal({ status: false }))}
        >
          ×
        </i>
      </div>
    </div>
  );
};

export default Modal;
