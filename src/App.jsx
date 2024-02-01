import { useState } from 'react'
import './App.css'
import FavProvider from './context/FavContext'
import Galeria from './components/galeria/Galeria'
import Favoritos from './components/favoritos/Favoritos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FavProvider>
        <Galeria/>
        <Favoritos/>
      </FavProvider>
    </>
  )
}

export default App
