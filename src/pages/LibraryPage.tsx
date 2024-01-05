import { AxiosResponse } from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { NewVideoForm } from "../components/NewVideoForm";
import { VideoCard } from "../components/VideoCard";
import VideoInterface from "../models/VideoInterface";
import { deleteVideoById } from "../services/videosService";

const LibraryPage = () => {
  const { data } = useLoaderData() as AxiosResponse<VideoInterface[]>;
  const [videos, setVideos] = useState(data);
  
  const deleteVideo = (id:string) => {
    deleteVideoById(id);
    setVideos(videos.filter((v) => v.id!=id))
  };

  return (
    <div className="flex flex-wrap justify-evenly">

      {
        videos.map((video: VideoInterface) =>
          <VideoCard key={video.id} video={video} deleteVideo={deleteVideo}/>
        )
      }

      <NewVideoForm setVideos={setVideos} />
    </div>
  )
}

export default LibraryPage