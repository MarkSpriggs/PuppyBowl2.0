import { useNavigate } from "react-router-dom";

export default function PlayerCard({
  setSelectedPlayer,
  player,
  deletePlayer,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedPlayer(player);
    navigate(`/player/${player.id}`);
  };

  return (
    <div className="playerCard">
      <h2>{player.name}</h2>

      <img className="cardsImage" src={player.imageUrl}></img>
      <button onClick={handleClick}>Learn More</button>
      <button onClick={() => deletePlayer(player.id)}>Delete Player</button>
    </div>
  );
}
