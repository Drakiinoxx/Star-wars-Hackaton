import { useEffect, useState } from "react";
import { Link } from "react-router";
import "../styles/SolarSystem.css";

function SolarSystem() {
  const [systems, setSystems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/solar-system")
      .then((res) => res.json())
      .then((data) => setSystems(data));
  }, []);

  return (
    <div className="solar-container">
      <div className="systems-grid">
        {systems.map((system) => (
          <Link
            key={system.name}
            to={`/SolarSystem/${system.name}`}
            className="system-card"
          >
            <img
              src={system.image}
              alt={system.name}
              className="system-image"
            />
            <h3>{system.name}</h3>
            <p>{system.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SolarSystem;
