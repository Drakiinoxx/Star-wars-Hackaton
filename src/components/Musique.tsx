import { useRef, useEffect } from "react";

function Musique({ registerPlayFn }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (registerPlayFn) {
      registerPlayFn(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      });
    }
  }, [registerPlayFn]);

  return (
    <figure className="hidden">
      <figcaption>🎵 Écouter la musique</figcaption>

      <audio
        ref={audioRef}
        controls
        src="src/audio/Star Wars Main Theme (Full) (1).mp3"
      ></audio>
    </figure>
  );
}

export default Musique;
