import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <Navbar />
      </div> 
      <div className='cajaCard'>
        <Card h1="titulo 1" desc="loreomdsdasfasf nasfn ajsnfjasfn jasnfjansfjansf s njsfnajf nasj nfjsnsjfnajsf nasjfn sjafna"/>
        <Card h1="titulo 2" desc="loreomdsdasfasf nasfn ajsnfjasfn jasnfjansfjansf s njsfnajf nasj nfjsnsjfnajsf nasjfn sjafna"/>
        <Card  h1="titulo 3" desc="loreomdsdasfasf nasfn ajsnfjasfn jasnfjansfjansf s njsfnajf nasj nfjsnsjfnajsf nasjfn sjafna"/>
      </div>
    </>
  )
}

export default App
