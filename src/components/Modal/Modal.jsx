import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

function Modal({ children, panelClasses, closeModal }) {
  useEffect(() => {
    const body = document.body;
    body.classList.add("overflow-hidden");

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal_bg}></div>
      <div onClick={closeModal} className={styles.modal_bg_blur}></div>
      <div className={`${styles.mainContent} ${panelClasses}`}>{children}</div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
