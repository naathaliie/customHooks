import "./App.css";
import Counter from "./components/Counter/Counter";
import { CounterType } from "./components/Counter/CounterState";
import TheBox from "./components/ShowFromAPI/TheBox";
import ToggleBtn from "./components/ToggleBtn/ToggleBtn";

const firstObj: CounterType = {
  startValue: 2,
  highestValue: 15,
  lowestValue: -10,
  stepValue: 5,
};

const secoundObj: CounterType = {
  startValue: 0,
  highestValue: 100,
  lowestValue: 0,
  stepValue: 10,
};

const thirddObj: CounterType = {
  startValue: 10,
  highestValue: 300,
  lowestValue: -100,
  stepValue: 50,
};

function App() {
  return (
    <>
      <TheBox />
      <ToggleBtn />
      <Counter values={firstObj} />
      <Counter values={secoundObj} />
      <Counter values={thirddObj} />
    </>
  );
}

export default App;
