import React from "react";
import "./Modal.css";
import { FaExclamation } from "react-icons/fa";

interface ModalTypes {
  onClose: any;
  show: boolean;
  children: any;
}

const Modal = (props: ModalTypes) => {
  const { show, onClose, children } = props;

  if (!show) {
    return null;
  }
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="model-header">
          <h4 className="modal-title">
            <p>
              <span>
                <FaExclamation />
              </span>{" "}
              Ooops!{" "}
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
