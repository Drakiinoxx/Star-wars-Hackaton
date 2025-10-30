import CardCharaters from "./CardCharaters";
import "../styles/ListCharacters.css";

function ListCharacters() {
  return (
    <>
      <h2>HABITANTS</h2>
      <div className="flex-characters">
        <CardCharaters />
      </div>
    </>
  );
}

export default ListCharacters;
