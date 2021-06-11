import { CloseButton } from "../CloseButton/CloseButton";
import "./Modal.css";

export const Modal = ({ title, children, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__head">
          <h4 className="modal__title">{title}</h4>
          <div className="modal__close">
            <CloseButton onClick={closeModal} />
          </div>
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};
