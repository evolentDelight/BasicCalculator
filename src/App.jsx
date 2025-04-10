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
    const leftOperand = Number(values.left);
    const rightOperand = Number(values.right);

    //Both operands must be a number, otherwise returns _ or "nothing"
    if (!(leftOperand && rightOperand)) return "_";

    switch (operation) {
      case OPERATIONS.ADDITION:
        return leftOperand + rightOperand;
      case OPERATIONS.SUBTRACTION:
        return leftOperand - rightOperand;
      case OPERATIONS.MULTIPLICATION:
        return leftOperand * rightOperand;
      case OPERATIONS.DIVISION:
        return rightOperand !== 0 ? leftOperand / rightOperand : "Undefined";
    }
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
