import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "./Modal";
import Card from "react-bootstrap/Card";
import "./AddCard.css";

function AddCard() {
  const [openModal, setOpenModal] = useState(false);

  const addPlant = async (plantName, plantImage, plantFrequency) => {
    setOpenModal(false);
    const plantData = {
      name: plantName,
      water: "Moderate",
      frequency: plantFrequency,
      image: plantImage,
    };
    try {
      const res = await axios.post(
        "https://plant-watering-app-server.onrender.com/addplant",
        plantData
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="cardAdd">
      <div>
        <Button className="addButton" onClick={() => setOpenModal(true)}>
        </Button>
        {openModal && <Modal closeModal={setOpenModal} addPlant={addPlant} />}
      </div>
    </div>
  );
}
export default AddCard;
