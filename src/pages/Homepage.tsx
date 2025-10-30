import { useEffect, useState } from "react";
import "./homepage.css";

function Homepage() {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  if (!showMain) {
    return (
      <div className="h-screen w-full flex items-center justify-center perspective">
        <div className="star-wars-text text-yellow-400">
          <p>
            Il y a bien longtemps, dans une galaxie lointaine... Les étudiants
            de la Wild Code School se lancèrent dans un Hackathon des plus
            grandiose, porté sur le thème de ...
          </p>
          <h1 className="mt-8 text-5xl font-bold flex justify-center">
            STAR WARS
          </h1>
          <p className="mt-6">
            Vous allez découvrir un monde remplis d'histoire pour arrivé jusqu'à
            vos personnages préférées, ou bien... les plus détéstés.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl mb-4 text-yellow-400">Débuter la visite </h1>
      <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500">
        Entrer dans notre nouvelle galaxie
      </button>
    </div>
  );
}

export default Homepage;
