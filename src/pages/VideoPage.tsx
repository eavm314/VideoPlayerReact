import { useRef, useState } from "react";
import { VideoMarks } from "../components/VideoMarks"
import { VideoPlayer } from "../components/VideoPlayer"
import Video from "../models/VideoInterface"
import StoreProvider from "../store/ContextProvider";
import { useLoaderData } from "react-router-dom";

const VideoPage = () => {

  const video = useLoaderData();
  console.log(video);

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