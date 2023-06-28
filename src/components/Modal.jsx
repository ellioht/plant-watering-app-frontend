import React, { useState } from "react";
import "./Modal.css";

function Modal({ closeModal, addPlant }) {
  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantFrequency, setPlantFrequency] = useState("");

  const handleAddPlant = (e) => {
    e.preventDefault();
    if (!plantName || !plantFrequency) {
      alert("Please fill all the fields");
      return;
    } else {
      addPlant(plantName, plantImage, plantFrequency);
      setPlantName("");
      setPlantImage("");
      setPlantFrequency("");
    }
  };

  return (
    <>
      <div className="modalBG">
        <div className="modalContainer">
          <div className="modalTitle">
            <h1>Add a plant</h1>
          </div>
          <div className="modalBody">
            <form className="plantForm" action="POST">
              <div className="inputContainer">
                <h2>Plant</h2>
                <input
                  className="nameInput"
                  type="text"
                  placeholder="Name"
                  onChange={(e) => {
                    setPlantName(e.target.value);
                  }}
                />
              </div>
              <div className="inputContainer">
                <h2>Image</h2>
                <input
                  className="imgInput"
                  type="text"
                  placeholder="Image link"
                  onChange={(e) => {
                    setPlantImage(e.target.value);
                  }}
                />
              </div>
              <div className="inputContainer">
                <h2>Water every</h2>
                <input
                  className="freqInput"
                  type="number"
                  placeholder="0"
                  onChange={(e) => {
                    setPlantFrequency(e.target.value);
                  }}
                />
                <h2>days</h2>
              </div>
            </form>
          </div>
          <div className="modalFooter">
            <button className="footerBtn" onClick={handleAddPlant}>
              Add plant
            </button>
            <button className="footerBtn" onClick={() => closeModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
