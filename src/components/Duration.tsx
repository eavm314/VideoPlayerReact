import format from "../helpers/durationFormat"

interface Props {
  seconds: number
}

export const Duration = ({ seconds }: Props) => {
  return (
    <time dateTime={`P${Math.round(seconds)}S`} >
      {format(seconds)}
    </time>
  )
}