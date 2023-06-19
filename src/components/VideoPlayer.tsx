import { useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player"
import { useDispatch, useStore } from "../store/ContextProvider";
import { types } from "../store/storeReducer";
import { updateMarks } from "../services/videosService";
import VideoInterface from "../models/VideoInterface";
import { VideoControls } from "./VideoControls";
import { IconBookmarkFilled, IconPlayerPauseFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import format from "../helpers/durationFormat";

export const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [videoDuration, setDuration] = useState(0);

  const videoRef = useRef();
  const dispatch = useDispatch();
  const { url, marks, id, ref } = useStore();

  useEffect(() => {
    dispatch({ type: types.addRef, payload: videoRef });
  }, []);

  useEffect(() => {
    updateMarks(id, marks);
  }, [marks])

  const saveMark = () => {
    const newMark = Number(playedSeconds.toFixed());
    if (marks.includes(newMark))
      return;

    dispatch({ type: types.addMark, payload: newMark });
  };

  return (
    <div className="w-3/4 max-w-3xl">
      <ReactPlayer
        ref={videoRef}
        url={url}
        playing={playing}
        onProgress={(state) => {
          if (!seeking){
            setPlayed(state.played);
          }
          setPlayedSeconds(state.playedSeconds);
        }}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onDuration={(duration) => setDuration(duration)}
        width="100%"
      />

<div className="flex mt-3 items-center justify-between">
      <button
        onClick={() => setPlaying(!playing)}
        className="hover:text-cyan-700 mx-5 
          border-4 border-black hover:border-cyan-700 rounded-full"
      >
        {playing ?
          <IconPlayerPauseFilled size={46} /> :
          <IconPlayerPlayFilled size={46} />
        }
      </button>

      <div className="w-full">
        <p>{format(playedSeconds)}/{format(videoDuration)}</p>
        <input className="w-full rounded-lg outline-none accent-cyan-700"
          type='range' min={0} max={0.999999} step='any'
          value={played}
          onMouseDown={() => setSeeking(true)}
          onChange={(e) => setPlayed(e.target.value)}
          onMouseUp={(e) => {
            ref.current.seekTo(parseFloat(e.target.value));
            setSeeking(false);
          }}
        />
      </div>

      <button
        onClick={saveMark}
        className="hover:text-cyan-700 mx-5"
      >
        <IconBookmarkFilled size={46} />

      </button>
    </div>
    </div>
  )
}
