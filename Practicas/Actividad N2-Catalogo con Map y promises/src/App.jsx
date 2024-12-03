import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//components
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
function App() {
  const [count, setCount] = useState(0);
  const autos = [
    {
      marca: "Toyota",
      modelo: "Corolla",
      año: 2012,
      color: "Gris",
      precio: 2500000,
    },
    {
      marca: "Chevrolet",
      modelo: "Sonic",
      año: 2013,
      color: "Bordo",
      precio: 2200000,
    },
    {
      marca: "Ford",
      modelo: "Focus",
      año: 2018,
      color: "Blanco",
      precio: 3200000,
    },
  ];

  return (
    <>
      <div>
        <Header/>
      </div>
      <div className="card-list-container">
        <CardList/>
      </div>
      {console.log(autos)}
      {console.log(autos.map((auto,idx) => `auto numero ${idx+1} marca : ${auto.marca}`))}
    </>
  );
}

export default App;
