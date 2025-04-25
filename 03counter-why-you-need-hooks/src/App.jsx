import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  let addValue = () => {
    setCount(count + 1);
  };

  let removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Count value is {count}</h1>
      <br />
      <div className="buttonBox">
        <button onClick={addValue}>+</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={removeValue}>-</button>
      </div>
    </>
  );
}

export default App;
