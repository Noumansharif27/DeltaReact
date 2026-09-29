import "./App.css";
import Tittle from "./Tittle";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function Description() {
  return <h3>This is Description</h3>;
}

function App() {
  return (
    <>
      <MsgBox username="Shradha" textColor="Red" />
      <MsgBox username="Raghuv" textColor="Blue" />
      <ProductTab />
    </>
  );
}

export default App;
