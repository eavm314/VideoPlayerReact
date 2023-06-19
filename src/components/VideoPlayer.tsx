import { useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player"
import { useDispatch, useStore } from "../store/ContextProvider";
import { types } from "../store/storeReducer";
import { updateMarks } from "../services/videosService";
import VideoInterface from "../models/VideoInterface";

export const VideoPlayer = () => {
  console.log("renderizando video...");
  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const videoRef = useRef();
  const dispatch = useDispatch();
  const { url, marks, id } = useStore() as VideoInterface;

  useEffect(() => {
    dispatch({ type: types.addRef, payload: videoRef })
  }, []);

  useEffect(() => {
    updateMarks(id, marks)
  }, [marks])


  const handlePlaying = () => {
    setPlaying(!playing);
  };

  const saveMark = () => {
    const newMark = Number(timeElapsed.toFixed());
    if (marks.includes(newMark))
      return;

    console.log("save mark at:", newMark);
    dispatch({ type: types.addMark, payload: newMark })
  };

  return (
    <div>
      <ReactPlayer
        ref={videoRef}
        url={url}
        playing={playing}
        onProgress={(state) => setTimeElapsed(state.playedSeconds)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button onClick={handlePlaying}>
        {playing ? "Pause" : "Play"}
      </button>

      {<button onClick={saveMark}>
        Marcar
      </button>}
    </div>
  )
}
