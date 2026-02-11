import { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem("count");

    if (savedCount !== null) {
      setCount(Number(savedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);
  return (
    <div className="container">
      <h1>React 83 – LocalStorage Counter</h1>

      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      <p>Osveži stran – vrednost ostane shranjena.</p>
    </div>
  );
}

export default App;
