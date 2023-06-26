import React from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

function AddCard() {

  const addPlant = async () => {

    const plantData = {
      name: 'Sunflower',
      water: 'Moderate',
      frequency: 'Once a week',
      image: 'sunflower.jpg'
    };

    try {
      const res = await axios.post("http://localhost:8000/addplant", plantData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }


  return(
    <>
      <div>
        <Button className="addButton" onClick={addPlant}>Add Plant</Button>
      </div>
    </>
  );
}
export default AddCard;