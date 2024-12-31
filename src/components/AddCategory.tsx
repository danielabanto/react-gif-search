import { ChangeEvent, FormEvent, useState } from "react"

type Props = {
  onAddCategory: (value: string) => void
}

export const AddCategory = ({onAddCategory}: Props) => {
  const [inputValue, setInputValue] = useState<string>("")

  const handleChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault()
    if ( inputValue.trim().length <=2 ) return;
    onAddCategory( inputValue.trim() )
    setInputValue("")
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input 
        type="text" 
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ handleChange }
      />
      <button type="submit">Add Category</button>
    </form>
  )
}
