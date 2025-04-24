import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchSinglePlayer() {
      try {
        const res = await fetch(
          `https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-pt/players/${id}`
        );
        const data = await res.json();
        console.log(data);
        setPlayer(data.data.player);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSinglePlayer();
  }, [id]);

  return (
    <div className="playerID">
      <h1>{player?.name}</h1>
      <img src={player?.imageUrl}></img>
      <h2>{player?.breed}</h2>
    </div>
  );
}
