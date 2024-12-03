import React, { useState } from "react";

const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1)
    const handleIncrement = () => {
        if (counter < stock) {
          setCounter(counter + 1);
      } else {
          alert("¡Has alcanzado el stock máximo!");
      }
    }
    const handleDecrement = () => {
        if (counter > 1) {
          setCounter(counter - 1);
      } else {
          alert("¡No puedes tener menos de 1!");
      }
    }
    const handleResent = () => {
        setCounter(0);
    }
    return (
    <div>
      <div>
        <h1>stock disponible : {stock}</h1>

       
        <button onClick={handleIncrement}>incrementar</button>
        <button onClick={handleDecrement}>decrementar</button>
        <button onClick={handleResent}>reset</button>
      </div>
      <div>
        <p> cantidad : <h3>{counter} </h3></p>
        <button>anadir al carrito</button>
        
      </div>
    </div>
  );
};

export default ItemCount;
