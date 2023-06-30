import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './WaterProgressBar.css';
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import axios from 'axios';

function WaterProgressBar(props) {

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

  const [waterFreq, setWaterFreq] = useState(props.frequency);
  const [waterProgBar, setWaterProgBar] = useState(0);

  
  // const checkNotification = async (notification) => {
  //   try {
  //     const res = await axios.get(`https://plant-watering-app-server.onrender.com/notification`);
  //     console.log("Notification checked!");
  //   } catch (error) {
  //     console.log(error+" failed to check notification");
  //   }
  // };
    
  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      console.log(props.water);
      const timeDiff = currentDate.getTime() - props.water;
      // Time diff (in ms) / number of ms/day (sec * min * hr * day).
      const daysDiff = (timeDiff) / (1000 * 60 * 60 * 24);
      const minDiff = (timeDiff) / (1000 * 60);
      const secDiff = (timeDiff) / (1000);
      // 100% - (example = (2days/7days) * 100 = 71.4%) = 28.6%.
      let waterProgBar = 100 - (minDiff / waterFreq) * 100;
      if (waterProgBar == 20) {
        // toastr["warning"]("Needs watering", props.plant)
        // postNotification();
      } else if (waterProgBar <= 10) {
        waterProgBar = 10;
        clearInterval(interval);
        toastr["warning"]("Needs watering", props.plant)
        postNotification({
          plant: props.pData,
          date: new Date(),
          message: "Water your plant!",
        });
      } 
      setWaterProgBar(Math.floor(waterProgBar));
      console.log(Math.floor(waterProgBar)+"%");
    }, 1000);
    return () => clearInterval(interval);
  }, [props.water, props.frequency]);

  // Post notification to user when plant needs watering.
  const postNotification = async (data) => {
    console.log(props.pData);
    const notificationData = data;
    try {
      const res = await axios.post(`https://plant-watering-app-server.onrender.com/sendnotification`, notificationData);
      console.log("Notification sent!");
    } catch (error) {
      console.log(error+" failed to send notification");
    }
  };

  return (
    <div>
      <ProgressBar className="pbar" now={waterProgBar} variant="custom-color" />
    </div>
  );
}

export default WaterProgressBar;