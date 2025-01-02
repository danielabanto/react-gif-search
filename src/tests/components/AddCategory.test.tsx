import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components"

describe('Pruebas <AddCategory />>', () => { 
  test('Debe cambiar valor de caja de texto', () => { 
    render( <AddCategory onAddCategory={() => {}} />)
    const input = screen.getByRole("textbox") as HTMLInputElement
    fireEvent.input( input, {
      target: {
        value: 'Saitama'
      }
    })

    expect( input.value ).toBe("Saitama")
  })

  test('Debe de llamar onNewCategory si input tiene un valor', () => { 
    const inputValue = "Saitama"
    const onNewCategory = jest.fn()

    render( <AddCategory onAddCategory={ onNewCategory } />)
    const input = screen.getByRole("textbox") as HTMLInputElement
    const form = screen.getByRole("form") as HTMLFormElement
    
    fireEvent.input( input, {
      target: {
        value: inputValue
      }
    })
    fireEvent.submit( form )
    
    expect( input.value ).toBe("")
    expect( onNewCategory ).toHaveBeenCalled()
    expect( onNewCategory ).toHaveBeenCalledTimes( 1 )
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
    
  })

  test('No debe llamar onNewCategory en input vacio', () => { 
    const onNewCategory = jest.fn()
    render( <AddCategory onAddCategory={onNewCategory} />)
    const form = screen.getByRole("form") as HTMLFormElement
    fireEvent.submit( form )
    
    expect( onNewCategory ).not.toHaveBeenCalled()
  })
})