import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Navbar from "../navbar";
import UserId from "../UserId";

function Login() {
  const server = "https://plant-watering-app-server.onrender.com/";
  const local = "http://localhost:8000/";

  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userId, setUserId] = useState(null);

  // This function is called when the login form is submitted.
  // It sends a POST request to the server with the user's email and password.
  // If the user exists, it redirects to the home page with the user's email as state.
  // If the user does not exist, it displays an alert message.
  // If there is an error, it logs the error to the console.
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(server, { email, password })
        .then((res) => {
          setUserId(res.data._id);
          console.log(res.data);
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
    <div className="loginBG">
      <div className="loginContainer">
        <div className="loginBox">
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
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name=""
              id=""
            />
            <input type="submit" value="Login" onClick={submit} />
          </form>

          <Link to="/signup" className="signupText">
            or signup
          </Link>
        </div>
      </div>
      <UserId userId={userId} />
    </div>
  );
}

export default Login;
