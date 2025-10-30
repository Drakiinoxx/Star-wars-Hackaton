import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router";
import "../styles/CharacterDetails.css";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((resData) => {
        const found = resData.find((c) => c.id === Number(id));
        setCharacter(found);
      });
  }, [id]);

  if (!character) return null;

  return (
    <div className="vh">
      <div className="flex">
        <div className="detail-wrapper">
          <img src={character.image} alt={character.name} />
          <div>
            <h2>{character.name}</h2>
            <p>Espèce : {character.species ?? "—"}</p>
            <p>Monde natal : {character.homeworld ?? "—"}</p>
            <p>Genre : {character.gender ?? "—"}</p>
            <p>Taille : {character.height ?? "?"} m</p>
            <p>Poids : {character.mass ?? "?"} kg</p>
            {character.wiki && (
              <a href={character.wiki} target="_blank" rel="noreferrer">
                Voir le wiki ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
