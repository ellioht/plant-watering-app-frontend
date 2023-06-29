import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Notifications from "./components/pages/Notifications";
import DataContext from "./DataContext";

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={{}}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
