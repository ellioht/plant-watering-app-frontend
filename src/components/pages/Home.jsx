import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PlantCard from "../PlantCard";
import "./Home.css";

function Home() {
  const location = useLocation();
  const [plants, setPlants] = useState([]);

  

  return (
    <div className="home">
      <h1>Hello {location.state.id} and welcome to plant watering app</h1>
      <PlantCard />
    </div>
  );
}

export default Home;
