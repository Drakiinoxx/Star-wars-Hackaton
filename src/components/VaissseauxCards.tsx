import { useEffect, useState } from "react";
import "../styles/Vaisseaux.css";
import { Link } from "react-router";

function VaisseauxCard() {
  const [vaisseaux, setVaisseaux] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/vaisseaux")
      .then((res) => res.json())
      .then((data) => setVaisseaux(data))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl  mdr ">
      {vaisseaux.map((vaisseau) => (
        <Link
          to="./SolarSystem"
          key={vaisseau.id}
          className=" text-center  hover:scale-105 transition-transform p-6 rounded-[20px] bg-[rgba(255,255,255,0.071)] backdrop-blur-[2px] shadow-[0_0_10px_rgba(255,255,255,0.15)]  duration-300 enfin"
        >
          <img
            src={vaisseau.image}
            alt={vaisseau.nom}
            className="w-52 h-36 object-cover rounded-lg mx-auto anais"
          />
          <div className="merde">
            <h3 className="text-lg font-bold underline helpme">
              {vaisseau.nom}
            </h3>
            <p className="oui">{vaisseau.type}</p>
            <p className="non">{vaisseau.affiliation}</p>
            <p className="help">{vaisseau.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default VaisseauxCard;
