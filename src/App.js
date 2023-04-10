import { useState, useMemo } from "react";
import moneyPic from "./undraw_savings_re_eq4w.svg";
import timePic from "./undraw_time_management_re_tk5w.svg";
import "./styles.css";

function slowFunction(num) {
  for (let i = 0; i < 500_000_000; i++) {}
  return Math.sqrt(num);
}

const UseMemoComponent = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("white");

  const squareRoot = useMemo(() => slowFunction(counter), [counter]);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const handleChangeColor = () => {
    setColor(color === "white" ? "aqua" : "white");
  };

  // more below but this is the import part

  return (
    <>
      <div className="container">
        <div className="bitWidth">
          {" "}
          <h2>UseMemo wrapping slow Component</h2>
          <p>
            The hook prevents the Slow Component from negatively affecting the
            other component. The increase count button will still have a slow
            response time while the color change will be almost immediate.
          </p>
        </div>
        <SlowComponent counter={counter} squareRoot={squareRoot} />
        <FastComponent color={color} />
        <div className="buttonContainer">
          {" "}
          <button onClick={increaseCounter}>Increase Count</button>
          <button onClick={handleChangeColor}>Color Change</button>
        </div>
      </div>
    </>
  );
};

const FastComponent = ({ color }) => {
  return (
    <div style={{ backgroundColor: `${color}` }} className="section">
      <h3>Affected Component</h3>
      <img src={moneyPic} alt="money" />
    </div>
  );
};

const SlowComponent = ({ counter, squareRoot }) => {
  return (
    <div className="section">
      <h3>Slow Component</h3>
      <img src={timePic} alt="time" />
      <p>
        Counter: {counter} Square Root: {squareRoot}
      </p>
    </div>
  );
};

function App() {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState("white");

  const squareRoot = slowFunction(counter);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const handleChangeColor = () => {
    setColor(color === "white" ? "aqua" : "white");
  };
  // more in the component but this is what matters most.
  return (
    <div>
      <h1>useMemo Practice</h1>
      <div className="container">
        <div className="bitWidth">
          {" "}
          <h2>Slows both without useMemo</h2>
          <p>
            Click either button and expect the counter, or the color to change
            in about 2 seconds.
          </p>
        </div>
        <SlowComponent counter={counter} squareRoot={squareRoot} />
        <FastComponent color={color} />
        <div className="buttonContainer">
          {" "}
          <button onClick={increaseCounter}>Increase Count</button>
          <button onClick={handleChangeColor}>Color Change</button>
        </div>
      </div>
      <UseMemoComponent />
    </div>
  );
}

export default App;
