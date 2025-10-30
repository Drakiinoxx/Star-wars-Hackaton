import CardCharaters from "./CardCharaters";
import "../styles/ListCharacters.css";

function ListCharacters() {
  return (
    <>
      <h1>HABITANTS</h1>
      <div className="flex-characters">
        <CardCharaters />
      </div>
    </>
  );
}

export default ListCharacters;
