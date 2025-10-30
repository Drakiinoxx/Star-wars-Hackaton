function Musique() {
  return (
    <figure
      className="fixed top-6 left-1/2 -translate-x-1/2 
                 z-[9999] pointer-events-auto 
                 bg-black/60 backdrop-blur-md border border-yellow-400 
                 rounded-xl p-4 flex flex-col items-center shadow-lg text-yellow-400"
    >
      <figcaption className="mb-2 text-sm font-semibold uppercase tracking-wider">
        🎵 Écouter la musique
      </figcaption>

      <audio
        controls
        src="src/audio/Star Wars Main Theme (Full) (1).mp3"
        className="w-64 accent-yellow-400"
      ></audio>
    </figure>
  );
}

export default Musique;
