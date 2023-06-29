import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <li className="nav_item">
        <button
          onClick={() => navigate("/home", { state: { id: props.mail } })}
          className="nav_link"
        >
          My Garden
        </button>
      </li>
      <li className="nav_item">
        <button
          onClick={() => navigate("/notifications", { state: { id: props.mail } })}
          className="nav_link"
        >
          Notifications
        </button>
      </li>
      <div className="logoutBox">
        <Link to="/" className="nav_brand">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
