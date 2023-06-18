import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count+1);
  }

  function decrease() {
    setCount(count-1);
  }

  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <h2>Qty : {count} </h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
