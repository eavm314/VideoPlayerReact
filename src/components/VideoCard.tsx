import ReactPlayer from "react-player"
import { useNavigate } from "react-router-dom";
import VideoInterface from "../models/VideoInterface";

export const VideoCard = ({video}) => {
  const navigate = useNavigate();
  const watchVideo = (video:VideoInterface) => {
    console.log("video:",video.id);
    navigate(`/app/video/${video.id}`)
  }
  return (
    <button
      onClick={() => watchVideo(video)}>
      <ReactPlayer
        url={video.url}
        light
        playIcon={<></>}
      />
    </button>
  )
}
