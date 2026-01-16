import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Form } from "./components/form";
import { Results } from "./components/results";
import type { Calculation } from "./types/calculator";

function App() {
  const [count, setCount] = useState(0);
  const [results, setResults] = useState<Calculation[]>([]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Form
        onSubmit={(output) => {
          setResults([...results, output]);
        }}
      />
      <Results
        results={results}
        onRemove={(uuid) => {
          setResults(results.filter((r) => r.uuid !== uuid));
        }}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
