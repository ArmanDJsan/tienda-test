import { useState } from 'react'
import ListProducts from './components/ListProducts'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ListProducts/>
    </>
  )
}

export default App
