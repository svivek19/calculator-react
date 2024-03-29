import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleBtn = (val) => {
    setInput((prevInput) => prevInput + val);
  };

  const clear = () => {
    setInput("");
  };

  const equal = () => {
    try {
      setInput(eval(input).toString());
    } catch (err) {
      setInput("Invaild");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <button onClick={() => handleBtn("1")}>1</button>
        <button onClick={() => handleBtn("2")}>2</button>
        <button onClick={() => handleBtn("3")}>3</button>
        <button onClick={() => handleBtn("+")}>+</button>
        <button onClick={() => handleBtn("4")}>4</button>
        <button onClick={() => handleBtn("5")}>5</button>
        <button onClick={() => handleBtn("6")}>6</button>
        <button onClick={() => handleBtn("-")}>-</button>
        <button onClick={() => handleBtn("7")}>7</button>
        <button onClick={() => handleBtn("8")}>8</button>
        <button onClick={() => handleBtn("9")}>9</button>
        <button onClick={() => handleBtn("*")}>*</button>
        <button onClick={() => handleBtn(".")}>.</button>
        <button onClick={() => handleBtn("0")}>0</button>
        <button onClick={() => handleBtn("/")}>/</button>
        <button onClick={clear}>C</button>
        <button onClick={equal}>=</button>
      </div>
    </div>
  );
};

export default App;
