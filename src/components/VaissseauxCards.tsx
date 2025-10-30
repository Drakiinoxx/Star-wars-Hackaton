import { useEffect, useState } from "react";

function VaisseauxCard() {
  const [vaisseaux, setVaisseaux] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/vaisseaux")
      .then((res) => res.json())
      .then((data) => setVaisseaux(data))
      .catch((err) => console.error("Erreur de chargement :", err));
  }, []);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-5xl mx-auto p-6  ">
      {vaisseaux.map((vaisseau) => (
        <div
          key={vaisseau.id}
          className="rounded-xl  text-center shadow-md hover:scale-105 transition-transform p-6 rounded-[20px] bg-[rgba(255,255,255,0.071)] backdrop-blur-[2px] shadow-[0_0_10px_rgba(255,255,255,0.15)] transition-transform duration-300 hover:scale-105"
        >
          <img
            src={vaisseau.image}
            alt={vaisseau.nom}
            className="w-52 h-36 object-cover rounded-lg mx-auto"
          />
          <div className="space-y-3">
            <h3 className="text-lg font-bold mt-2 underline">{vaisseau.nom}</h3>
            <p>{vaisseau.type}</p>
            <p>{vaisseau.affiliation}</p>
            <p>{vaisseau.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VaisseauxCard;
