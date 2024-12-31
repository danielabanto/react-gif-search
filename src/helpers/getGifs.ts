export type Gif = {
    id: string;
    title: string;
    url: string;
}

// https://developers.giphy.com/dashboard/

export const getGifs = async(category: string):Promise<Gif[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UoYtsM9wsqM1KCuUXgyfdCdxTNoENliu&limit=20&q=${ category }`
    const resp = await fetch(url)
    const { data } = await resp.json()

    return data.map( (image: any) => ({
      id: image.id,
      title: image.title,
      url: image.images.downsized_medium.url,
    }))
  }