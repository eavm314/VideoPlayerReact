import VideoInterface from "../models/VideoInterface";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { VideoCard } from "../components/VideoCard";
import { NewVideoForm } from "../components/NewVideoForm";
import { useState } from "react";

const LibraryPage = () => {
  const { data } = useLoaderData() as AxiosResponse<VideoInterface[]>;
  const [videos, setVideos] = useState(data);
  return (
    <div>
      <div>
        {
          videos.map((video:VideoInterface) => 
            <VideoCard key={video.id} video={video}/>
          )
        }
      </div>
      <NewVideoForm setVideos={setVideos}/>
    </div>
  )
}

export default LibraryPage