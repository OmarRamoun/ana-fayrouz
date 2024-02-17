import { useEffect } from 'react';
import './Modal.style.css';

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    }
    if (!show) {
      document.body.style.overflow = 'auto';
    }
  }, [show]);

  return (
    <>
      {show && (
        <div
          className="modal-root"
          onClick={(event) => {
            if (event.currentTarget === event.target) {
              onClose();
            }
          }}
          style={{ backdropFilter: 'blur(5px)' }}
        >
          <div className="modal-content-box">{children}</div>
          <button className="modal-close" onClick={onClose}>
            <i className="fa fa-times" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
