import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Planetes() {
  const { systemName } = useParams();
  const [system, setSystem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3310/solar-system")
      .then((res) => res.json())
      .then((data) => {
        const selectedSystem = data.find(
          (s) => s.name === decodeURIComponent(systemName!),
        );
        setSystem(selectedSystem);
      });
  }, [systemName]);

  return (
    <div className="solar-container">
      {system ? (
        <div className="systems-grid">
          {system.planets.map((planet) => (
            <Link to={`/characters/${planet.name.toLowerCase()}`} key={planet.name} className="system-card">
              <img
                src={planet.image}
                alt={planet.name}
                className="system-image"
              />
              <h3>{planet.name}</h3>
              </Link>
          ))}
        </div>
      ) : (
        <p>Chargement ...</p>
      )}
    </div>
  );
}

export default Planetes;

