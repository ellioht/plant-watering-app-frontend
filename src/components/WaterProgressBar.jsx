import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './WaterProgressBar.css';

function WaterProgressBar(props) {
  const [waterFreq, setWaterFreq] = useState(props.frequency);
  const [waterProgBar, setWaterProgBar] = useState(0);

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
      if (waterProgBar <= 10) {
        waterProgBar = 10;
      } 
      setWaterProgBar(Math.floor(waterProgBar));
      console.log(Math.floor(waterProgBar)+"%");
    }, 1000);
    return () => clearInterval(interval);
  }, [props.water, props.frequency]);



  return (
    <div>
      <ProgressBar className="pbar" now={waterProgBar} variant="custom-color" />
    </div>
  );
}

export default WaterProgressBar;