import { useEffect, useState } from "react";
import { Link } from "react-router";
import Musique from "../components/Musique";
import "../styles/homepage.css";
import bgImage from "../assets/11-631.avif";

function Homepage() {
  const [showMain, setShowMain] = useState(false);
  const [fadeInMain, setFadeInMain] = useState(false);
  const [fadeToBlack, setFadeToBlack] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const crawlTimer = setTimeout(() => {
      setFadeToBlack(true);

      setTimeout(() => {
        setShowMain(true);
        document.body.style.overflow = "auto";
        setFadeInMain(true);
      }, 2000);
    }, 20000);

    return () => clearTimeout(crawlTimer);
  }, []);

  return (
    <>
      <Musique />

      {!showMain && (
        <div className="h-screen w-full flex items-center justify-center perspective relative overflow-hidden">
          <div className="star-wars-text text-yellow-400 text-center max-w-5xl">
            <p className="text-5xl leading-snug">
              Il y a bien longtemps, dans une galaxie lointaine...
              <br />
              Les étudiants de la Wild Code School se lancèrent dans un
              Hackathon des plus grandiose, porté sur ...
            </p>
            <h1 className="m-8 text-9xl font-bold flex justify-center p-10">
              STAR WARS
            </h1>
            <p className="mt-6 text-5xl">
              Vous allez découvrir un monde rempli d'histoire pour arriver
              jusqu'à vos personnages préférés, ou bien... les plus détestés.
            </p>
          </div>
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-2000 ${
              fadeToBlack ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      )}
      {showMain && (
        <div
          className={`h-screen text-white flex flex-col items-center justify-center relative transition-all duration-1500 ${
            fadeInMain ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-5xl mb-6 text-yellow-400 animate-fadeInSlow">
              Débuter la visite
            </h1>
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg text-2xl font-semibold hover:bg-yellow-500 transition-transform transform hover:scale-110">
              <Link to="/Vaissseaux">Entrer dans notre nouvelle galaxie</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Homepage;
