import { useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player"
import { useDispatch, useStore } from "../store/ContextProvider";
import { types } from "../store/storeReducer";

export const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  const videoRef = useRef(); 
  const dispatch = useDispatch();
  const {url} = useStore();
  
  useEffect(() => {
    dispatch({type: types.addRef, payload: videoRef})
  },[]);

  const handleDuration = (duration: number) => {
    console.log('onDuration', duration)

    // setState({ duration })
  };

  const handlePlaying = () => {
    setPlaying(!playing);
  };

  const saveMark = () => {
    console.log("save mark at:", timeElapsed.toFixed());
    dispatch({type: types.addMark, payload: Number(timeElapsed.toFixed())})
    // setMarks((marks) => [...marks, Number(timeElapsed.toFixed())]);
    
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
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <button onClick={handlePlaying}>
        {playing? "Pause":"Play"}
      </button>

      {<button onClick={saveMark}>
        Marcar
      </button>}
    </div>
  )
}
