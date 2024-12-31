import { useState } from 'react'
import './styles.css'
import { AddCategory, GifGrid } from './components'

const defaultCategorie = 'One Punch'

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState<string[]>([ defaultCategorie ])

  const onAddCategory = (newCategory: string) => {
    if (categories.includes(newCategory)) return
    setCategories((c) => [ newCategory, ...c ])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onAddCategory={onAddCategory}/>

      { categories.map((c) => (
        <GifGrid category={ c } key={ c }/>
      ))}

    </>
  )
}

