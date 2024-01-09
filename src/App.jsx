import React, { useState } from 'react'
import ListProducts from './components/ListProducts'
import Cart from './components/Cart';
import './App.css'

export const ConText = React.createContext();

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <ConText.Provider value={[cart, setCart]}>
        <ListProducts />
        <Cart/>
      </ConText.Provider>
    </>
  )
}

export default App
