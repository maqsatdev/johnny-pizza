import React from "react";
import { useDispatch } from "react-redux";

//style
import "./Modal.css";
//actions
import { setModal } from "../../../redux/actions/modal";

const Modal = ({ active }) => {
  const dispatch = useDispatch();

  const setModalStatus = () => {
    dispatch(setModal(false));
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setModalStatus()}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">fgdf</div>
      </div>
    </div>
  );
};

export default Modal;
