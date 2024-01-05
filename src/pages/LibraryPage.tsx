import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { NewVideoForm } from "../components/NewVideoForm";
import { VideoCard } from "../components/VideoCard";
import VideoInterface from "../models/VideoInterface";
import { deleteVideoById, getVideos, updateName } from "../services/videosService";

const LibraryPage = () => {
  const data = useLoaderData() as VideoInterface[];
  const [videos, setVideos] = useState(data);

  const deleteVideo = (id: string) => {
    deleteVideoById(id);
    setVideos(videos.filter((v) => v.id != id))
  };

  const renameVideo = (id: string, name: string) => {
    updateName(id, name);
    setVideos(getVideos())
  };

  return (
    <div className="flex flex-wrap justify-evenly">

      {
        videos.map((video: VideoInterface) =>
          <VideoCard key={video.id} 
            video={video} 
            deleteVideo={deleteVideo} 
            renameVideo={renameVideo} />
        )
      }

      <NewVideoForm setVideos={setVideos} />
    </div>
  )
}

export default LibraryPage