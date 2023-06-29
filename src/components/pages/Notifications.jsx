import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "./Notifications.css";
import Navbar from "../navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Notifications(props) {
  const location = useLocation();
  const [notifications, setNotifications] = React.useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get(
          `https://plant-watering-app-server.onrender.com/getnotifications`
        );
        setNotifications(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNotifications();
  }, []);

  const buldTable = () => {
    return notifications?.map((notification, index) => (
      <tr key={index}>
        <td>{notification.plant}</td>
        <td>{notification.date}</td>
        <td>{notification.message}</td>
      </tr>
    ));
  };

  return (
    <div>
      <Navbar mail={location.state.id} />
      <div className="home">
        <h1>
          Here you can view <span style={{ fontWeight: "bolder" }}>{location.state.id}</span> 's
          notifications
        </h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Plant</th>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>{buldTable()}</tbody>
      </Table>
    </div>
  );
}

export default Notifications;
