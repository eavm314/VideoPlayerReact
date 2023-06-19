import ReactPlayer from "react-player"
import { videos } from "../models/SavedVideos"
import Video from "../models/VideoInterface";
import { useNavigate } from "react-router-dom";

const LibraryPage = () => {
  const navigate = useNavigate();
  const watchVideo = (video:Video) => {
    console.log("video:",video.id);
    navigate(`/app/video/${video.id}`)
  }
  return (
    <div>
      LibraryPage
      <div>
        {
          videos.map((video) => 
            <button onClick={() => watchVideo(video)}>
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