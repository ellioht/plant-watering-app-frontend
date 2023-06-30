import "./PlantCard.css";
import React, { useState, useEffect } from "react";
import WaterProgressBar from "./WaterProgressBar";
import placeholder from "../imgs/placeholder.png";
import axios from "axios";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";


function PlantCard(props) {

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

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
      toastr["success"]("Plant watered", props.name)
      postNotification({
        plant: props.id,
        date: new Date(),
        message: "Plant Watered!",
      });
    } catch (error) {
      console.log(error+" failed to water plant");
    }
  };

  const postNotification = async (data) => {
    const notificationData = data;
    try {
      const res = await axios.post(`https://plant-watering-app-server.onrender.com/sendnotification`, notificationData);
      console.log("Notification sent!");
    } catch (error) {
      console.log(error+" failed to send notification");
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
