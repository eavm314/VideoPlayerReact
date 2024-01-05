import { VideoMarks } from "../components/VideoMarks"
import { VideoPlayer } from "../components/VideoPlayer"
import VideoInterface from "../models/VideoInterface"
import StoreProvider from "../store/ContextProvider";
import { useLoaderData } from "react-router-dom";

const VideoPage = () => {
  const video = useLoaderData() as VideoInterface;

  return (
    <StoreProvider selectedVideo={video}>
      <h1 className="text-4xl font-bold mb-3">{video.name}</h1>
      <div className="flex">
        <VideoPlayer />
        <VideoMarks />
      </div>

    </StoreProvider>

  )
}

export default VideoPage