import { VideoMarks } from "../components/VideoMarks"
import { VideoPlayer } from "../components/VideoPlayer"
import VideoInterface from "../models/VideoInterface"
import StoreProvider from "../store/ContextProvider";
import { useLoaderData } from "react-router-dom";
import { AxiosResponse } from "axios";

const VideoPage = () => {

  const {data: video} = useLoaderData() as AxiosResponse<VideoInterface>;

  return (
    <StoreProvider selectedVideo={video}>
      <div>
        <VideoPlayer />
        <VideoMarks />
      </div>

    </StoreProvider>

  )
}

export default VideoPage