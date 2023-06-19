import format from "../helpers/durationFormat"

export const VideoMarks = ({ marks, videoRef }) => {
  
  const goToMark = (timeMark:number) => {
    videoRef.current.seekTo(timeMark);
  };

  return (
    <div className="flex flex-col">
      {
        marks.map((mark) =>
          <button 
            className="w-20"
            onClick={() => goToMark(mark)}>
            {format(mark)}
          </button>
        )}
    </div>
  )
}
