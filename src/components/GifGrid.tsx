import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }: { category: string }) => {
  const { gifs, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3>{ category }</h3>
      { isLoading && <p>Cargando...</p> }
      <div className="card-grid">
        {gifs.map(gif => (
          <GifItem key={ gif.id } { ...gif }/>
        ))}
      </div>
    </>
  )
}
