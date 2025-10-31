import { useNavigate } from "react-router";
import "../styles/ButonNav.css";

function ButonNav() {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="stpsauvemoi border-2 border-amber-400 bg-amber-400/20 text-amber-300 text-2xl font-semibold rounded-full flex justify-center items-center  shadow-[0_0_20px_rgba(255,191,0,0.5)] hover:bg-amber-400 hover:text-black hover:shadow-[0_0_40px_rgba(255,191,0,0.9)] transition-all duration-300 tracking-widest uppercase"
      onClick={() => {
        navigate(-1);
      }}
    >
      Retour
    </button>
  );
}

export default ButonNav;
