import React from "react";
import "./Modal.css";

function Modal({ closeModal, addPlant }) {
  return (
    <>
      <div className="modalBG">
        <div className="modalContainer">
          <button className="closeBtn" onClick={()=>closeModal(false)}>X</button>
          <div className="modalTitle">
            <h1>Modal Title</h1>
          </div>
          <div className="modalBody">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
          <div className="modalFooter">
            <button className="footerBtn" onClick={()=>closeModal(false)}>Cancel</button>
            <button className="footerBtn" onClick={()=>addPlant()}>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
