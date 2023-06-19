import { useRef, useState } from "react";

import ReactPlayer from "react-player"
import Video from "../models/VideoInterface"
import example from "../assets/example.mp4"

export const VideoPlayer = ({ url, setMarks, videoRef }) => {
  // console.log("renderizando video...")

  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const handleDuration = (duration: number) => {
    console.log('onDuration', duration)

    // setState({ duration })
  };

  const handlePlaying = () => {
    setPlaying(!playing);
  };

  const saveMark = () => {
    console.log("save mark at:", timeElapsed.toFixed());
    setMarks((marks) => [...marks, Number(timeElapsed.toFixed())]);
    
  };

  return (
    <div>
      <ReactPlayer
        ref={videoRef}
        url={url}
        playing={playing}
        onDuration={handleDuration}
        onProgress={(state) => {
          setTimeElapsed(state.playedSeconds)
          console.log("progress..")
        }}
        
      />

      <button onClick={handlePlaying}>
        {playing? "Pause":"Play"}
      </button>

      <button onClick={saveMark}>
        Marcar
      </button>
    </div>
  )
}
