import VaissseauxCards from "../components/VaissseauxCards";
import "../styles/ListCharacters.css";
import "../App.css";

function Vaissseaux() {
  return (
    <>
      <div className="min-h-screen">
        <h2>Nos différents vaisseaux</h2>
        <p className="flex justify-center ">
          Choisis ton vaisseaux afin d'allez explorer notre merveilleux monde
        </p>
        <VaissseauxCards />
      </div>
    </>
  );
}

export default Vaissseaux;
