import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el Hook useFetchGifs', () => { 
  test('Evaluar el estado inicial', () => {
    const { result } = renderHook( () => useFetchGifs('One Punch') )
    const { gifs, isLoading } = result.current
    
    expect( gifs.length ).toBe(0)
    expect(isLoading).toBeTruthy()
    
  })

  test('Debe de retornar un arreglo de imagenes y isLoading en false', async() => {
    const { result } = renderHook( () => useFetchGifs('One Punch') )
    await waitFor(
      () => expect( result.current.gifs.length ).toBeGreaterThan( 0 ),
      { timeout: 2000 }
    )
    const { gifs, isLoading } = result.current
    
    expect( gifs.length ).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
    
  })
})