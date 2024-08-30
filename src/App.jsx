import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Composants
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [isConnected, setIsConnected] = useState(Cookies.get("token") || null);

  // console.log(data);
  return (
    <>
      <Router>
        <Header isConnected={isConnected} setIsConnected={setIsConnected} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={<Signup setIsConnected={setIsConnected} />}
          />
          <Route
            path="/login"
            element={<Login setIsConnected={setIsConnected} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
