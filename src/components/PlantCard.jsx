import "./PlantCard.css";
import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import WaterProgressBar from "./WaterProgressBar";
import { Container } from "react-bootstrap";

function PlantCard() {
  return (
    <Card className="card">
      <div className="close"></div>
      <Card.Body className="cardCnter">
        <div className="cardBody">
          <div>
            <div className="plantImg"></div>
          </div>

          <div className="plantTextContainer">
            <Card.Title className="title">Lavender</Card.Title>

            <hr />

            <div className="textInline">
              <Card.Text className="textSmall">Frequency</Card.Text>
              <Card.Text className="textSmall">2/Week</Card.Text>
            </div>
            <div className="textInline">
              <Card.Text className="textLarge">Water in</Card.Text>
              <Card.Text className="textLarge textBold">3 days</Card.Text>
            </div>
            <div className="cardFooter">
              <WaterProgressBar />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PlantCard;
