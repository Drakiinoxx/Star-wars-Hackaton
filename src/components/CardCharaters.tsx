import { useEffect, useState } from "react";
import "../styles/CardCharaters.css";

function CardCharaters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((resData) => console.log(resData) || setCharacters(resData));
  }, []);
  return (
    <>
      {characters.map((character) => (
        <div className="card-container">
          <img src={character.image} alt={character.name} />
          <p>{character.name}</p>
        </div>
      ))}
    </>
  );
}

export default CardCharaters;
