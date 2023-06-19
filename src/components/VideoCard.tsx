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
    <div className="w-96 my-2">
      <button className="w-full h-56"
        onClick={() => watchVideo(video)}>
        <ReactPlayer
          url={video.url}
          light
          playIcon={<></>}
          width="100%"
          height="100%"
        />
      </button>
      <p className="text-lg font-bold">{video.name? video.name: "Untitled"}</p>
    </div>
  )
}
