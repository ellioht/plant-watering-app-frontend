import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Notifications from "./components/pages/Notifications";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
