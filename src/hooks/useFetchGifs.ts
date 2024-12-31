import { useEffect, useState } from "react"
import { Gif, getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category: string ) => {
  const [ gifs, setGifs ] = useState<Gif[]>([])
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    (async() => {
      const newGifs = await getGifs(category)
      setGifs(newGifs)
      setIsLoading(false)
    })()
  }, [])
  
  return ({ isLoading, gifs })
}