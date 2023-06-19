import { useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player"
import { useDispatch, useStore } from "../store/ContextProvider";
import { types } from "../store/storeReducer";
import { updateMarks } from "../services/videosService";
import VideoInterface from "../models/VideoInterface";
import { VideoControls } from "./VideoControls";

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
    console.log("click");
    const newMark = Number(timeElapsed.toFixed());
    if (marks.includes(newMark))
      return;

    console.log("save mark at:", newMark);
    dispatch({ type: types.addMark, payload: newMark })
  };

  return (
    <div className="w-3/4 max-w-3xl">
      <ReactPlayer
        ref={videoRef}
        url={url}
        playing={playing}
        onProgress={(state) => setTimeElapsed(state.playedSeconds)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        width="100%"
      />

      <VideoControls 
        handlePlaying={handlePlaying}
        saveMark={saveMark}
        playing={playing}
      />
    </div>
  )
}
