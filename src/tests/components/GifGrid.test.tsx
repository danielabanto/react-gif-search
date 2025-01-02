import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components"
import { useFetchGifs } from "../../hooks/useFetchGifs"

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />>', () => { 
  const category = "One Punch"
  test('Debe de mostrar el loading inicialmente', () => { 
    (useFetchGifs as jest.Mock).mockReturnValue({
      gifs: [],
      isLoading: true
    })
    render(<GifGrid category={ category } />)

    expect( screen.getByText('Cargando...') ).toBeTruthy
    expect( screen.getByText( category ) ).toBeTruthy
  })

  test('Debe mostrar items cuando se cargan imagenes', () => { 
    const gifs = [
      { id: "ABC", title: "Saitama", url:"https:localhost:3030/saitama" },
      { id: "DEF", title: "Goku", url:"https:localhost:3030/goku" }
    ];
    (useFetchGifs as jest.Mock).mockReturnValue({
      gifs,
      isLoading: false
    })
    render(<GifGrid category={ category } />)

    expect( screen.getAllByRole('img').length ).toBe(2)
  })
})