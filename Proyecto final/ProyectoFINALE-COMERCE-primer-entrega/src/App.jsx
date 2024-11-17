import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import { ProductList } from './components/ProductList/ProductList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar cantidadCarrito={5} />
      </div>
      <div>
        <ProductList/>
      </div>
    </>
  )
}

export default App
