import { useCounter } from "../../hooks/useCounter";
import MyButton from "../MyButton/MyButton";
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
        att vara <span style={{ color: "blue" }}>BLÅTT</span>
      </h5>
      <p style={isEven() ? { color: "hotpink" } : { color: "blue" }}>{count}</p>
      <button
        onClick={() => {
          decreaseCount(1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          increaseCount(1);
        }}
      >
        +
      </button>
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
          increaseCount(values.stepValue);
        }}
      >
        öka med {values.stepValue}
      </button>
      <button
        onClick={() => {
          decreaseCount(values.stepValue);
        }}
      >
        minska med{values.stepValue}
      </button>
    </div>
  );
};

export default Counter;
