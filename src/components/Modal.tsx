import React from "react";
import "../styles/Modal.css";
import { FaExclamationCircle } from "react-icons/fa";

export interface ModalTypes {
  onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
  children: React.ReactNode;
}

const Modal = (props: ModalTypes) => {
  const { show, onClose, children } = props;

  if (!show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <h4 className="modal-title">
            <p>
              <span>
                <FaExclamationCircle />
              </span>
              Ooops!
            </p>
          </h4>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
