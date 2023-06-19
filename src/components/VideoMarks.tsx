import { useEffect } from "react";
import format from "../helpers/durationFormat"
import { updateMarks } from "../services/videosService";
import { useDispatch, useStore } from "../store/ContextProvider";
import { types } from "../store/storeReducer";

export const VideoMarks = () => {

  const dispatch = useDispatch();
  const {ref, marks, id} = useStore();
  
  const goToMark = (timeMark:number) => {
    ref.current.seekTo(timeMark);
  };

  const deleteMark = (index:number) => {
    dispatch({type: types.deleteMark, payload: index});
  };
  
  useEffect(() => {
    updateMarks(id, marks)
  }, [marks])
  

  return (
    <div className="flex flex-col">
      {
        marks.map((mark, i) => 
        <div>
          <button key={i}
            className="w-20"
            onClick={() => goToMark(mark)}>
            {format(mark)}
          </button>
          <button
            onClick={() => deleteMark(i)}
          >
            e
          </button>
        </div>
        )}
    </div>
  )
}
