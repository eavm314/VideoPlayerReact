import { IconBookmarkFilled, IconPlayerPauseFilled, IconPlayerPlayFilled } from "@tabler/icons-react"

export const VideoControls = ({handlePlaying, saveMark, playing}) => {
  return (
    <div className="mt-3">
      <button
        onClick={handlePlaying}
        className="hover:text-cyan-700 mx-5 
          border-4 border-black hover:border-cyan-700 rounded-full"
      >
        {playing ?
          <IconPlayerPauseFilled size={46} /> :
          <IconPlayerPlayFilled size={46} /> 
        }
      </button>

      <button
        onClick={saveMark}
        className="hover:text-cyan-700 mx-5"
      >
        <IconBookmarkFilled size={46} />

      </button>
    </div>
  )
}
