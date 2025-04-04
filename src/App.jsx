import { useState } from 'react'
import './App.css'
import Operation from './components/Operation';
import Result from './components/Result';

function App() {
  const [values, setValues] = useState({left: "", right: ""})
  const [operation, setOperation] = useState("Addition")

  function handleLeftNumberSignConversion(){
    setValues(function(prevValues){
      return(
        {
          left: -prevValues.left,
          right: prevValues.right
        }
      )
    })
  }

  function handleLeftNumber(event){
    let input = event.target.value.trim();//trim() to remove all whitespace
    if(input === "-"){//When there is only a minus(-) sign left during deletion, turn to 0
      setValues(prevValues =>(
          {
            left: "",
            right: prevValues.right
          }
        )
      )
    }
    if(!isNaN(Number(input))){//if Number
      setValues(
        (prevValues) => (
          {
            left: input,
            right: prevValues.right
          }
        )
      )
    }
  }

  function handleRightNumberSignConversion(){
    setValues(
      (prevValues) => ({
        left: prevValues.left,
        right: -prevValues.right
      })
    )
  }

  function handleRightNumber(event){
    let input = event.target.value.trim();//trim() to remove all whitespace
    if(input === "-"){//When there is only a minus(-) sign left during deletion, turn to 0
      setValues(prevValues =>(
          {
            left: prevValues.left,
            right: ""
          }
        )
      )
    }
    if(!isNaN(Number(input))){//if Number
      setValues(
        (prevValues) =>(
          {
            left: prevValues.left,
            right: input
          }
        )
      )
    }
  }

  function handleOperation(event){
    setOperation(event.target.value);
  }

  let result = 0;

  if(operation === "Addition") result = Number(values.left) + Number(values.right);
  if(operation === "Subtraction") result = Number(values.left) - Number(values.right);
  if(operation === "Multiplication") result = Number(values.left) * Number(values.right);
  if(operation === "Division") result = Number(values.left) / Number(values.right);

  return (
    <div className='container'>
      <Operation
        values={values}
        onLeftNumberChange={handleLeftNumber}
        onLeftNumberSignChange={handleLeftNumberSignConversion}
        onRightNumberChange={handleRightNumber}
        onRightNumberSignChange={handleRightNumberSignConversion}
        onOperationChange={handleOperation}
      />
      <Result calculationResult={result}/>
    </div>
  )
}

export default App

// +, −, ×, ÷
// Addition, Subtraction, Multiplication, Division