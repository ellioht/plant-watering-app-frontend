import "./PlantCard.css";
import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function PlantCard () {

  useEffect(() => {});

  return (
    <Card className="card">
      <Card.Body className="cardBody">

      <div>
          <div className="plantImg">
          </div>
        </div>

        <div className="plantTextContainer">
          <Card.Title className="title">PLANT NAME</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </div>

        <div>
          <div className="wateringIcon">
          </div>
        </div>

      </Card.Body>
    </Card>
  );
}

export default PlantCard;