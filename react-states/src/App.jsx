import "./App.css";

function App() {
  let count = 0;

  let inCount = () => {
    count += 1;
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
