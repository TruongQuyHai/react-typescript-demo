import "./App.css";
import { List } from "./components/generics/List";

function App() {
  return (
    <div className="App">
      {/* <List
        items={["batman", "superman", "wonder woman"]}
        onClick={console.log}
      />
      <List items={[1, 2, 3]} onClick={console.log} /> */}
      <List
        items={[
          { id: 1, first: "Bruce", last: "Wayne" },
          { id: 2, first: "Clard", last: "Kent" },
          { id: 3, first: "Princess", last: "Diana" },
        ]}
        onClick={console.log}
      />
    </div>
  );
}

export default App;
