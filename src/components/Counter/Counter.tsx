import { useCounter } from "../../hooks/useCounter";
import "./Counter.scss";
import { CounterType } from "./CounterState";

type CounterProps = {
  values: CounterType;
};

const Counter = ({ values }: CounterProps) => {
  const {
    count,
    setCount,
    increaseCount,
    decreaseCount,
    resetCount,
    maxValue,
    minValue,
    isEven,
    stepValueUp,
    stepDownValue,
  } = useCounter(
    values.startValue,
    values.highestValue,
    values.lowestValue,
    values.stepValue
  );

  return (
    <div className="Counter">
      <h5>
        Maxvärdet är {values.highestValue} och minsta värdet är{" "}
        {values.lowestValue}
      </h5>
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
      <button
        onClick={() => {
          stepValueUp();
        }}
      >
        +step
      </button>
      <button
        onClick={() => {
          stepDownValue();
        }}
      >
        -step
      </button>
    </div>
  );
};

export default Counter;
