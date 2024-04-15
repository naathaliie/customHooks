import "./App.css";
import { useCounter } from "./hooks/useCounter";

function App() {
  const {
    count,
    setCount,
    increaseCount,
    decreaseCount,
    resetCount,
    minValue,
    maxValue,
    isEven,
  } = useCounter(5, 15, -10);

  return (
    <>
      <h5>Maxvärdet är 15 och minsta värdet är -10</h5>
      <h5>
        Ett jämt värde kommer att vara{" "}
        <span style={{ color: "hotpink" }}>ROSA</span> och ojämt värde kommer
        att vara <span style={{ color: "blueviolet" }}>BLÅTT</span>
      </h5>
      <p style={isEven() ? { color: "hotpink" } : { color: "blueviolet" }}>
        {count}
      </p>
      <button
        onClick={() => {
          decreaseCount();
        }}
      >
        -
      </button>
      <button onClick={() => increaseCount()}>+</button>
      <button
        onClick={() => {
          resetCount();
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setCount(minValue);
        }}
      >
        Minsta värdet
      </button>
      <button
        onClick={() => {
          setCount(maxValue);
        }}
      >
        Högsta värdet
      </button>
    </>
  );
}

export default App;
