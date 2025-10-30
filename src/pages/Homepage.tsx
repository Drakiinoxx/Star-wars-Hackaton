import { useEffect, useState, useRef } from "react";
import { Link } from "react-router";
import Musique from "../components/Musique";
import "../styles/homepage.css";
import bgImage from "../assets/11-631.avif";

function Homepage() {
  const [showMain, setShowMain] = useState(false);
  const [fadeInMain, setFadeInMain] = useState(false);
  const [fadeToBlack, setFadeToBlack] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  const playMusicRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) return;

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
  }, [startAnimation]);

  return (
    <>
      <Musique registerPlayFn={(fn) => (playMusicRef.current = fn)} />

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-black text-yellow-400 rounded-2xl shadow-lg p-10 w-[420px] text-center border-2 border-yellow-400 font-[StarJedi]">
            <h2 className="text-3xl uppercase tracking-widest ">
              Bienvenue, jeune Padawan
            </h2>
            <p className="text-lg text-yellow-200 font-sans ouaii">
              Prépare-toi à un voyage dans une galaxie lointaine, très
              lointaine...
            </p>

            <button
              onClick={() => {
                setIsOpen(false);
                setStartAnimation(true);

                if (playMusicRef.current) playMusicRef.current();
              }}
              className="mt-8 inline-block text-xl font-bold tracking-widest text-yellow-400 uppercase border-2 border-yellow-400 rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_40px_rgba(255,255,0,0.9)] transform hover:scale-105 transition-all duration-300 font-[StarJedi] coucoucmoi"
            >
              Commencer l’aventure
            </button>
          </div>
        </div>
      )}

      {startAnimation && !showMain && (
        <div className="h-screen w-full flex items-center justify-center perspective relative overflow-hidden">
          <div className="star-wars-text text-yellow-400 text-center max-w-5xl space-y-12">
            <p className="text-5xl leading-snug">
              Il y a bien longtemps, dans une galaxie lointaine...
              <br />
              Les étudiants de la Wild Code School se lancèrent dans un
              Hackathon des plus grandiose, porté sur ...
            </p>
            <h1 className="text-9xl font-bold flex justify-center poulet">
              STAR WARS
            </h1>
            <p className="text-5xl">
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
            <h1 className="text-5xl mb-8 text-yellow-400 animate-fadeInSlow">
              Débuter l'expedition
            </h1>

            <Link
              to="/Vaissseaux"
              className="bg-yellow-400 text-black rounded-lg text-xl font-semibold hover:bg-yellow-500 transition-transform transform hover:scale-110 inline-block cocote"
            >
              Merci de bien vouloir choisir votre déstination
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Homepage;
