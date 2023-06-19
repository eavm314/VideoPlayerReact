import { useRef, useState } from "react";
import { VideoMarks } from "../components/VideoMarks"
import { VideoPlayer } from "../components/VideoPlayer"
import VideoInterface from "../models/VideoInterface"
import StoreProvider from "../store/ContextProvider";
import { useLoaderData } from "react-router-dom";

const VideoPage = () => {

  const {data: video} = useLoaderData();
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