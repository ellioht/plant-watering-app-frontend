import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("https://plant-watering-app-server.onrender.com/", { email, password })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data === "notexist") {
            alert("User does not exist");
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
    <div>
      <h1>Login</h1>

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
        <input className = "password"
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

      <Link to="/signup" className ="signUp">Signup</Link>
    </div>
  );
}

export default Login;