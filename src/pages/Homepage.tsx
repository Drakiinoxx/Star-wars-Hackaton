import { useEffect, useState } from "react";
import { Link } from "react-router";
import Musique from "../components/Musique"; // 👈 ton composant musique
import "../styles/homepage.css";

function Homepage() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowMain(true);
      document.body.style.overflow = "auto";
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Musique />

      {!showMain ? (
        <div className="h-screen w-full flex items-center justify-center perspective">
          <div className="star-wars-text text-yellow-400">
            <p className="text-5xl">
              Il y a bien longtemps, dans une galaxie lointaine... Les étudiants
              de la Wild Code School se lancèrent dans un Hackathon des plus
              grandiose, porté sur ...
            </p>
            <h1 className="m-8 text-9xl font-bold flex justify-center p-10">
              STAR WARS
            </h1>
            <p className="mt-6 text-5xl">
              Vous allez découvrir un monde rempli d'histoire pour arriver
              jusqu'à vos personnages préférés, ou bien... les plus détestés.
            </p>
          </div>
        </div>
      ) : (
        <div className="h-screen text-white flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-4 text-yellow-400">Débuter la visite</h1>
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500">
            <Link to="/ListCharacters">Entrer dans notre nouvelle galaxie</Link>
          </button>
        </div>
      )}
    </>
  );
}

export default Homepage;
