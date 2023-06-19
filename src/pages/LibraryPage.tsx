import VideoInterface from "../models/VideoInterface";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { VideoCard } from "../components/VideoCard";
import { NewVideoForm } from "../components/NewVideoForm";
import { useState } from "react";
import { deleteVideoById } from "../services/videosService";

const LibraryPage = () => {
  const { data } = useLoaderData() as AxiosResponse<VideoInterface[]>;
  const [videos, setVideos] = useState(data);
  
  const deleteVideo = (id:string) => {
    setVideos(videos.filter((v) => v.id!=id))
    deleteVideoById(id);
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