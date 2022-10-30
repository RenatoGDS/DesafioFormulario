import { Player, Controls } from "@lottiefiles/react-lottie-player";
import "./style.css";

export function Loading() {
  return (
    <div id="loading">
      <Player
        autoplay
        loop
        src="https://assets6.lottiefiles.com/datafiles/bNwYPnjv3OdFA5w/data.json"
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
}
