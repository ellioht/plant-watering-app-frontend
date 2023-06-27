import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

function Signup() {
  const server = "https://plant-watering-app-server.onrender.com/signup";
  const local = "http://localhost:8000/signup";

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(server, { email, password })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((err) => {
          alert("Wrong details");
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Signup</h1>
        <form className="Info" action="POST">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name=""
            id=""
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name=""
            id=""
          />
          <input type="submit" onClick={submit} />
        </form>

        <Link to="/" className="signupText">Login</Link>
      </div>
    </div>
  );
}

export default Signup;
