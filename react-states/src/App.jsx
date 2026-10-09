import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let inCount = () => {
    setCount(count + 1);
    console.log(count);
  };
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={inCount}>+1</button>
    </>
  );
}

export default App;
