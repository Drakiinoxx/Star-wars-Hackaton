import CardCharaters from "./CardCharaters";
import { useParams } from "react-router";
import "../styles/ListCharacters.css";

function ListCharacters() {
  const { planet } = useParams();

  return (
    <div className="center">
      <h2>LES HABITANTS DE {planet.toUpperCase()}</h2>
      <div className="flex-characters">
        <CardCharaters planet={planet} />
      </div>
    </div>
  );
}

export default ListCharacters;
