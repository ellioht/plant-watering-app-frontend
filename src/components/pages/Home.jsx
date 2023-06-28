import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlantCard from "../PlantCard";
import AddCard from "../AddCard";
import "./Home.css";
import axios from "axios";

function Home() {
  const location = useLocation();
  const [plants, setPlants] = useState([]);

  const GetPlants = async () => {
    const res = await fetch("https://plant-watering-app-server.onrender.com/getplants");
    const data = await res.json();
    setPlants(data);
  };

  useEffect(() => {
    GetPlants();
  }, [plants]);

  const deletePlant = async (id) => {
    try {
      const res = await axios.delete(
        `https://plant-watering-app-server.onrender.com/deleteplant/${id}`
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <h1>Welcome back{" "}
        <span style={{fontWeight: "bolder"}}>
          {location.state.id}  
        </span>
        {" "}to your garden</h1>
      <div className="plantCardContainer">
        {plants.map((plant) => (
          <PlantCard
            key={plant._id}
            id={plant._id}
            name={plant.name.toUpperCase().slice(0, 1) + plant.name.slice(1)}
            waterDate={plant.water}
            frequency={plant.frequency}
            image={plant.image}
            close={() => deletePlant(plant._id)}
          />
        ))}
        <AddCard />
      </div>
    </div>
  );
}

export default Home;
