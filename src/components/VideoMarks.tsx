import format from "../helpers/durationFormat"
import { useStore } from "../store/ContextProvider";

export const VideoMarks = () => {

  const {ref, marks} = useStore();
  
  const goToMark = (timeMark:number) => {
    ref.current.seekTo(timeMark);
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
