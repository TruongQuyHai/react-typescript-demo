import "./App.css";
import { RandomNumber } from "./components/restriction/RandomNumber";

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isNegative />
    </div>
  );
}

export default App;
