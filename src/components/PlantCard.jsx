import "./PlantCard.css";
import React, { useState} from "react";
import Card from "react-bootstrap/Card";
import WaterProgressBar from "./WaterProgressBar";
import placeholder from "../imgs/placeholder.png";

function PlantCard(props) {
  const [image, setImage] = useState(props.image);
  const handleImageError = () => {
    setImage(placeholder);
  }
  return (
    <div className="card">
      <button className="close" onClick={props.close}></button>
      <div className="cardCnter">
        <div className="cardBody">
          <img
            src={image}
            alt=""
            className="plantImgSrc"
            onError={handleImageError}
          />
          <div className="wateringIcon"></div>
        </div>
        <div className="plantTextContainer">
          <div className="plantName"><h1>{props.name}</h1></div>
          <div className="waterAfter"><p>Water every {props.frequency} days</p></div>
          <WaterProgressBar 
            waterProgBar={props.water}
          />
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
