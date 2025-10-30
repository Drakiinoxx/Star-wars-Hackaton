import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Planetes() {
  const { systemName } = useParams(); 
  const [system, setSystem] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3310/solar-system")
      .then(res => res.json())
      .then((data) => {
        const selectedSystem = data.find(
          (s) => s.name === decodeURIComponent(systemName!)
        );
        setSystem(selectedSystem);
      });
  }, [systemName]);

  return (
    <div className="solar-container">
        {system ? (
      <div className="systems-grid">
        {system.planets.map((planet) => (
          <div key={planet.name} className="system-card">
            <img src={planet.image} alt={planet.name} className="system-image" />
            <h3>{planet.name}</h3>
          </div>
        ))}
      </div>
        ) : (
            <p>Chargement ...</p>
        )}
    </div>
  );
}

export default Planetes;

