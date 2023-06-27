import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Modal from "./Modal";

function AddCard() {
  const [openModal, setOpenModal] = useState(false);

  const addPlant = async () => {
    setOpenModal(false);
    const plantData = {
      name: 'Sunflower',
      water: 'Moderate',
      frequency: 'Once a week',
      image: 'sunflower.jpg'
    };
    try {
      const res = await axios.post("https://plant-watering-app-server.onrender.com/addplant", plantData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  return(
    <>
      <div>
        <Button className="addButton" onClick={() => setOpenModal(true)}>Add Plant</Button>
        {openModal && <Modal closeModal={setOpenModal} addPlant={addPlant}/>}
      </div>
    </>
  );
}
export default AddCard;