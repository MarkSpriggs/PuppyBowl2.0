import { useState } from "react";
import { useEffect } from "react";
import PlayerCard from "./components/PlayerCard";
import SearchBar from "./components/SearchBar";
import AddPlayerForm from "./components/NewPlayerForm";

export default function Home({ favorites, setFavorites }) {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const res = await fetch(
          "https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-pt/players"
        );
        const data = await res.json();
        console.log(data);
        setPlayers(data.data.players);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayers();
  }, []);

  async function deletePlayer(id) {
    try {
      const res = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-pt/players/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();
      if (data?.success) {
        setPlayers((prevPlayers) =>
          prevPlayers.filter((player) => player.id !== id)
        );
      } else {
        console.error("Failed to delete player.");
      }
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  }

  const searchedPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <div className="home">
      <h1 className="titles">Puppy Bowl</h1>

      <SearchBar className="searchBar" searchBar={searchBar} setSearchBar={setSearchBar} />

      <div className="playerCards">
        {searchedPlayers.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            setSelectedPlayer={setSelectedPlayer}
            selectedPlayer={selectedPlayer}
            deletePlayer={deletePlayer}
          />
        ))}
      </div>
    </div>
  );
}
