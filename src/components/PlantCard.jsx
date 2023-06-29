import "./PlantCard.css";
import React, { useState, useEffect } from "react";
import WaterProgressBar from "./WaterProgressBar";
import placeholder from "../imgs/placeholder.png";
import axios from "axios";

function PlantCard(props) {
  const [wateringDate, setWateringDate] = useState(props.waterDate);
  const [image, setImage] = useState(props.image);
  const handleImageError = () => {
    setImage(placeholder);
  };

  const waterPlant = async (id) => {
    const newTime = new Date().getTime();
    const plantData = {
      name: props.name,
      water: newTime,
      frequency: props.frequency,
      image: props.image,
    };
    try {
      const res = await axios.put(`https://plant-watering-app-server.onrender.com/updateplant/${id}`, plantData);
      setWateringDate(newTime);
      console.log("new time " + newTime);
      console.log("Watered!");
    } catch (error) {
      console.log(error+" failed to water plant");
    }
  };

  return (
    <div className="card">
      <button className="close" onClick={props.close}></button>
      <div className="cardCnter">
        <div className="cardBody">
          <img src={image} alt="" className="plantImgSrc" onError={handleImageError} />
          <div className="wateringIcon">
            <button className="wateringIconBtn" onClick={() => waterPlant(props.id)}></button>
          </div>
        </div>
        <div className="plantTextContainer">
          <div className="plantName">
            <h1>{props.name}</h1>
          </div>
          <div className="waterAfter">
            <p>Water every {props.frequency} days</p>
          </div>
          <WaterProgressBar
            frequency={props.frequency}
            water={wateringDate}
            plant={props.name}
            pData={props.id}
          />
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
