import React, { useState } from 'react';
import './App.css';

function App() {
 const [count, setCount] = useState(0);
  if(count < 0) {
    setCount(0)
  }
  return (
    <div className="app">
      <h1 class="h1">{count}</h1>


<div className="button">
    
      <button class="btn"  onClick={() => setCount(count + 1)}>+</button>
        
      <button class="btn" onClick={() => setCount(0)}>RESET</button>
        
      <button class="btn" onClick={() => setCount(count - 1)}>-</button>
      </div>

  
</div>

  );
}

export default App;
