import { useState, useMemo, useCallback } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div className="page">
      <div className="center -box">
      <h1 className="heading">USEMemo & USECallback Demo</h1>

      <div className="card">
        <h2>Count: {count}</h2>
        <h2>Double (useMemo): {double}</h2>

        <button className="btn" onClick={increment}>
          Increment
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
