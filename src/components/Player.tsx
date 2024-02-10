import { useState } from "react";

export default function Player() {
  const [playing, playingSet] = useState(false);

  return (
    <div>
      <p>{playing ? "Playing" : "Paused"}</p>

      <button onClick={() => playingSet((prev) => !prev)}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
}
