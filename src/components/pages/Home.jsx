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
    const res = await fetch("http://localhost:8000/getplants");
    const data = await res.json();
    setPlants(data);
  }

  useEffect(() => {
    GetPlants();
  }, [plants]);

  const deletePlant = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/deleteplant/${id}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      <h1>Hello {location.state.id} and welcome to plant watering app</h1>
      <div className="plantCardContainer">
      {plants.map((plant) => (
        <PlantCard
          key={plant._id}
          name={plant.name}
          water={plant.water}
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
