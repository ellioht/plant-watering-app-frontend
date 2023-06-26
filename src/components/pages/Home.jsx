import React from "react";
import { useLocation } from "react-router-dom";
import PlantCard from "../PlantCard";

function Home() {
  const location = useLocation();

  return (
    <div>
      <h1>Hello {location.state.id} and welcome to plant watering app</h1>
      <PlantCard />
    </div>
  );
}

export default Home;
