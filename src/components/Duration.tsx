import format from "../helpers/durationFormat"

export const Duration = ({ seconds }) => {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} >
      {format(seconds)}
    </time>
  )
}