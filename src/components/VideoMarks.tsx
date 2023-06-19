import { Mark } from "./Mark";
import { useStore } from "../store/ContextProvider";

export const VideoMarks = () => {

  const { marks } = useStore();

  return (
    <div className="ml-5">
      <h1 className="text-3xl mb-5 font-bold">Marcadores: </h1>
      {
        marks.map((mark, i) =>
          <Mark mark={mark} index={i} />
        )}
    </div>
  )
}
