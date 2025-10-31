import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router";
import "../styles/CharacterDetails.css";
import { useNavigate } from "react-router";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

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
    <>
      <div className="vh">
        <div className="center">
          <button
            type="button"
            className=" stpsauvemoi border-2 border-amber-400 bg-amber-400/20 text-amber-300 text-2xl font-semibold rounded-full flex justify-center items-center  shadow-[0_0_20px_rgba(255,191,0,0.5)] hover:bg-amber-400 hover:text-black hover:shadow-[0_0_40px_rgba(255,191,0,0.9)] transition-all duration-300 tracking-widest uppercase"
            onClick={() => {
              navigate(-1);
            }}
          >
            Retour
          </button>
        </div>
        <div className="">
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
      </div>
    </>
  );
}

export default CharacterDetails;
