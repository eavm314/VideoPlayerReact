import { IconTrash } from "@tabler/icons-react";
import format from "../helpers/durationFormat";
import { useDispatch, useStore } from "../store/ContextProvider";
import { types } from "../store/storeReducer";

export const Mark = ({mark, index}) => {
  const dispatch = useDispatch();
  const {ref} = useStore();

  const goToMark = (timeMark:number) => {
    ref.current.seekTo(timeMark);
  };

  const deleteMark = (markToDelete:number) => {
    dispatch({type: types.deleteMark, payload: markToDelete});
  };
  
  return (
    <div className="flex bg-slate-200 rounded-md py-2 px-4 my-2">
      <p className="text-xl">Marcador N°{index+1}: </p>
      <button key={index}
        className="mx-5 text-cyan-600 text-lg w-20 text-end hover:font-bold"
        onClick={() => goToMark(mark)}>
        {format(mark)}
      </button>
      <button className="hover:text-red-600"
        onClick={() => deleteMark(mark)}
      >
        <IconTrash />
      </button>
    </div>
  )
}
