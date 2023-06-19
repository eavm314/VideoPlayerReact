import ReactPlayer from "react-player"
import VideoInterface from "../models/VideoInterface";
import { useLoaderData, useNavigate } from "react-router-dom";

const LibraryPage = () => {
  const { data: videos } = useLoaderData();

  const navigate = useNavigate();
  const watchVideo = (video:VideoInterface) => {
    console.log("video:",video.id);
    navigate(`/app/video/${video.id}`)
  }
  return (
    <div>
      LibraryPage
      <div>
        {
          videos.map((video:VideoInterface) => 
            <button key={video.id}
              onClick={() => watchVideo(video)}>
              <ReactPlayer 
                url={video.url}
                light
                playIcon={<></>}
              />
            </button>
          )
        }
      </div>
    </div>
  )
}

export default LibraryPage