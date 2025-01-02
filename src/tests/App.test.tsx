import { render, screen } from "@testing-library/react"
import { GiftExpertApp } from "../App"

describe('Pruebas en <App />>', () => { 
    test('Should title be rendered', () => { 
        render( <GiftExpertApp />)
        expect( screen.getByText('GiftExpertApp') )
    })
})