import { Gif } from "../helpers/getGifs"

interface Props extends Gif {}

export const GifItem = ({ title, url }: Props) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}
