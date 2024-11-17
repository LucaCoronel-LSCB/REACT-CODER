import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Counter from './components/Counter'
function App() {
  return (
    <>
      <div>
        <NavBar/>  
        <Counter/>      
      </div>
    </>
  )
}

export default App
