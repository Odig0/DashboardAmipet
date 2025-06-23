import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const numero  = 1
  numero 

  const incrementar = () => setCount(count + 1);
  const resetear = () => setCount(0);
  const restar = ()=> setCount(count - 1)

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Contador</h1>
      <h2 style={{ fontSize: '3rem' }}>{count}</h2>
      <div>
        <button onClick={incrementar} style={{ margin: '0.5rem', padding: '1rem' }}>
          Incrementar
        </button>

        <button onClick={restar} style={{ margin: '0.5rem', padding: '1rem' }}>
          Restar
        </button>
       
        <button onClick={resetear} style={{ margin: '0.5rem', padding: '1rem' }}>
          Resetear
        </button>
      </div>
    </div>
  );
};

export default Counter;
