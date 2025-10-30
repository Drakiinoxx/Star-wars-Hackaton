import { Link } from "react-router-dom";
import "../styles/start.css";

function Start() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <Link
        to="/home"
        className="inline-block  text-xl font-bold tracking-widest text-yellow-400 uppercase border-2 border-yellow-400 rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_40px_rgba(255,255,0,0.9)] transform hover:scale-105 transition-all duration-300 font-[StarJedi] coucoucmoi"
      >
        Démarrer votre aventure
      </Link>
    </div>
  );
}

export default Start;
