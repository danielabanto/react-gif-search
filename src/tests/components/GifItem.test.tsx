import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components'

describe("Pruebas sobre <GifItem />", () => {
  const title = 'Saitama'
  const url = "https://one-punch.com/saitama.jpg"

  test("Validar Snapshot", () => {
    const { container } = render( <GifItem id='1' title={title} url={url}/>)
    expect( container ).toMatchSnapshot()
  })

  test("dege de mostrar la imagen con URL y alt indicado", () => {
    render( <GifItem id='1' title={title} url={url}/>)
    // screen.debug()
    const { src, alt } = screen.getByRole("img") as HTMLImageElement
    console.log(src)
    expect( src ).toBe( url )
    expect( alt ).toBe( title )
  })

  test('Debe de mostrar el titulo en el componente', () => { 
    render( <GifItem id='1' title={title} url={url}/>)
    expect(screen.getByText(title)).toBeTruthy()
  })
})