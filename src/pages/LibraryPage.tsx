import ReactPlayer from "react-player"
import { videos } from "../models/SavedVideos"

const LibraryPage = () => {
  return (
    <div>
      LibraryPage
      <div>
        {
          videos.map((video) => 
            <button onClick={() => console.log("video:",video.url)}>
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