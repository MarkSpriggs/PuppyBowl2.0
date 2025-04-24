import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  const [token, setToken] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  return (
    <>
      <nav id="navBar">
        <Link to="/">Home</Link>
        <Link to="/addplayerform">Add Player</Link>
      </nav>

      <div>
        <Routes>
          <Route path="/" element={<Home p />} />
          <Route path="/player/:id" element={<SinglePlayer />} />
          <Route path="/addplayerform" element={<NewPlayerForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
