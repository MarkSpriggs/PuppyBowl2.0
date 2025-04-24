import { useState } from "react";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPlayer = {
      name,
      breed,
      imageUrl,
    };

    try {
      const res = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-pt/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPlayer),
        }
      );

      const data = await res.json();

      if (data.data.newPlayer) {
        setMessage("New Player Added!");
        setName("");
        setBreed("");
        setImageUrl("");
      } else {
        setMessage("TYhat didnt work please try again!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="newplayerform">
      <h1>Add A New Player!</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          required
          onChange={(e) => setBreed(e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}
