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
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("");

  // console.log(data);
  return (
    <>
      <Router>
        <Header
          token={token}
          setToken={setToken}
          search={search}
          setSearch={setSearch}
          setPage={setPage}
        />
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route
            path="/offer/:id"
            element={<Offer token={token} setPage={setPage} />}
          />
          <Route path="/signup" element={<Signup setToken={setToken} />} />
          <Route
            path="/login"
            element={
              <Login setToken={setToken} page={page} setPage={setPage} />
            }
          />
          <Route path="/publish" element={<Publish token={token} />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
