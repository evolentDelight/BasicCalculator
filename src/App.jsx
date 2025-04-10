import { useState } from "react";
import "./App.css";
import Operation from "./components/Operation";
import Result from "./components/Result";

const OPERATIONS = {
  ADDITION: "Addition",
  SUBTRACTION: "Subtraction",
  MULTIPLICATION: "Multiplication",
  DIVISION: "Division",
};

function App() {
  const [values, setValues] = useState({ left: "", right: "" });
  const [operation, setOperation] = useState(OPERATIONS.ADDITION);

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

  const calculateResult = () => {
    //if either operand's value is empty, result is "_" or nothing
    if (!values.left || !values.right) return "_";

    const leftOperand = Number(values.left);
    const rightOperand = Number(values.right);

    if (!Number.isFinite(leftOperand) || !Number.isFinite(rightOperand))
      return "Max Number Reached";

    let result;

    switch (operation) {
      case OPERATIONS.ADDITION:
        result = leftOperand + rightOperand;
        break;
      case OPERATIONS.SUBTRACTION:
        result = leftOperand - rightOperand;
        break;
      case OPERATIONS.MULTIPLICATION:
        result = leftOperand * rightOperand;
        break;
      case OPERATIONS.DIVISION:
        result = rightOperand !== 0 ? leftOperand / rightOperand : "Undefined";
        break;
    }

    if (result === "Undefined") return result;
    else return Number.isFinite(result) ? result : "Max Number Reached";
  };

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
      <Result calculationResult={calculateResult()} />
    </div>
  );
}

export default App;

// +, −, ×, ÷
// Addition, Subtraction, Multiplication, Division
