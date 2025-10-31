import CardCharaters from "../components/CardCharaters";
import { useParams } from "react-router";
import "../styles/ListCharacters.css";
import { useNavigate } from "react-router";

function ListCharacters() {
  const { planet } = useParams();
  const navigate = useNavigate();
  return (
    <div className="center">
      <button
        type="button"
        className="stpsauvemoi border-2 border-amber-400 bg-amber-400/20 text-amber-300 text-2xl font-semibold rounded-full flex justify-center items-center  shadow-[0_0_20px_rgba(255,191,0,0.5)] hover:bg-amber-400 hover:text-black hover:shadow-[0_0_40px_rgba(255,191,0,0.9)] transition-all duration-300 tracking-widest uppercase"
        onClick={() => {
          navigate(-1);
        }}
      >
        Retour
      </button>
      <h2>LES HABITANTS DE {planet.toUpperCase()}</h2>
      <div className="flex-characters">
        <CardCharaters planet={planet} />
      </div>
    </div>
  );
}

export default ListCharacters;
