import { useState } from "react";
import "./App.css";
import Operation from "./components/Operation";
import Result from "./components/Result";

function App() {
  const [values, setValues] = useState({ left: "", right: "" });
  const [operation, setOperation] = useState("Addition");

  const handleSignConversion = (operand) =>
    setValues((prevValues) => ({
      ...prevValues,
      [operand]: -prevValues[operand],
    }));

  const handleNumberChange = (operand) => (event) => {
    let input = event.target.value.trim(); //trim() to remove all whitespace
    if (input === "-") {
      //When there is only a minus(-) sign left during deletion, turn to 0
      setValues((prevValues) => ({
        ...prevValues,
        [operand]: "",
      }));
    }
    if (!isNaN(Number(input))) {
      //if Number
      setValues((prevValues) => ({
        ...prevValues,
        [operand]: input,
      }));
    }
  };

  function handleOperation(event) {
    setOperation(event.target.value);
  }

  let result = 0;

  if (operation === "Addition")
    result = Number(values.left) + Number(values.right);
  if (operation === "Subtraction")
    result = Number(values.left) - Number(values.right);
  if (operation === "Multiplication")
    result = Number(values.left) * Number(values.right);
  if (operation === "Division")
    result = Number(values.left) / Number(values.right);

  return (
    <div className="container">
      <Operation
        values={values}
        onLeftNumberChange={handleNumberChange("left")}
        onLeftNumberSignChange={() => handleSignConversion("left")}
        onRightNumberChange={handleNumberChange("right")}
        onRightNumberSignChange={() => handleSignConversion("right")}
        onOperationChange={handleOperation}
      />
      <Result calculationResult={result} />
    </div>
  );
}

export default App;

// +, −, ×, ÷
// Addition, Subtraction, Multiplication, Division
