import React from 'react';
import './App.css'
import Header from "./components/Header"
import Counter from "./components/Counter"
{/*         ARROW FUNCCION
  function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    </>
  )
}

export default App

  */}
const var1 = "Productos de primera calidad"

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <div>
          <Header titulo="vaper_AG_OK" subtitulo="Coronel Luca"/>
          <p>{var1}</p>
        </div>
        <div>
          <Counter/>
        </div>
      </div>
      
    );
  }
}

export default App;