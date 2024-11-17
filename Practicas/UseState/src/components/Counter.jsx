// Counter.jsx
import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter">
      <h2 className="counter-value">{count}</h2>
      <div className="counter-buttons">
        <button onClick={increment} className="button increment">Incrementar</button>
        <button onClick={decrement} className="button decrement">Decrementar</button>
        <button onClick={reset} className="button reset">Reiniciar</button>
      </div>
    </div>
  );
}

export default Counter;