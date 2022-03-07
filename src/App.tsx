import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log("button click", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log(123);
        }}
      />
    </div>
  );
}

export default App;
