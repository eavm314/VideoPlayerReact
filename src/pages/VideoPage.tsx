import { useRef, useState } from "react";
import { VideoMarks } from "../components/VideoMarks"
import { VideoPlayer } from "../components/VideoPlayer"
import Video from "../models/VideoInterface"
import StoreProvider from "../store/ContextProvider";

const VideoPage = () => {
  const savedVideo: Video =
  {
    url: "https://www.youtube.com/watch?v=oCqIr1v7t7Q",
    marks: [
      500,
      2,
      98,
      23,
    ],
  }
  const videoRef = useRef();

  const [marks, setMarks] = useState(savedVideo.marks);

  return (
    <StoreProvider>
      <div>
        <VideoPlayer url={savedVideo.url} setMarks={setMarks} videoRef={videoRef} />
        <VideoMarks marks={marks} videoRef={videoRef} />
      </div>

    </StoreProvider>

  )
}

export default VideoPage