import ReactPlayer from "react-player"
import { useNavigate } from "react-router-dom";
import VideoInterface from "../models/VideoInterface";
import { IconTrash } from "@tabler/icons-react";

export const VideoCard = ({video, deleteVideo}) => {
  const navigate = useNavigate();

  const watchVideo = (video:VideoInterface) => {
    console.log("video:",video.id);
    navigate(`/app/video/${video.id}`)
  };

  return (
    <div className="w-96 my-2 group">
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
      <div className="flex">
        <p className="text-lg font-bold">{video.name? video.name: "Untitled"}</p>
        <button onClick={() => deleteVideo(video.id)}
          className="ml-auto invisible 
          group-hover:visible hover:text-red-600">
          <IconTrash />
        </button>
      </div>
    </div>
  )
}
