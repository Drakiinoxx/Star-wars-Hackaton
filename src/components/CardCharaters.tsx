import { useEffect, useState } from "react";
import "../styles/CardCharaters.css";
import { Link } from "react-router";

function CardCharaters({ planet }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((resData) => console.log(resData) || setCharacters(resData));
  }, []);

  const filteredCharacters = planet
    ? characters.filter((char) => {
        const home =
          typeof char.homeworld === "string"
            ? char.homeworld.toLowerCase()
            : char.homeworld?.name?.toLowerCase();

        return home === planet?.toLowerCase();
      })
    : characters;

  return (
    <>
      {filteredCharacters.length > 0 ? (
        filteredCharacters.map((character) => (
          <Link
            to={`/characters/details/${character.id}`}
            key={character.id}
            className="card-container"
          >
            <div className="img-perso-test">
              <img
                className="img-perso"
                src={character.image}
                alt={character.name}
              />
            </div>
            <p>{character.name}</p>
          </Link>
        ))
      ) : (
        <p>Aucun habitant trouvé pour {planet}</p>
      )}
    </>
  );
}

export default CardCharaters;
