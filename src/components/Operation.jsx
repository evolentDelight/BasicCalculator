import "./Operation.css"

export default function Operation({values, onLeftNumberChange, onLeftNumberSignChange, onRightNumberChange, onRightNumberSignChange, onOperationChange}){
  return(
    <div className= "operation-container">
      <div className="input-container">
        <button onClick={onLeftNumberSignChange}>+/-</button>
        <input type="text"
          placeholder="Enter Number Here"
          onInput={onLeftNumberChange}
          value={values.left}
        />
      </div>

      <select className="operation" onInput={onOperationChange}>
        <option value="Addition">+</option>
        <option value="Subtraction">−</option>
        <option value="Multiplication">×</option>
        <option value="Division">÷</option>
      </select>

      <div className="input-container">
        <button onClick={onRightNumberSignChange}>+/-</button>
        <input type="text"
          placeholder="Enter Number Here"
          onInput={onRightNumberChange}
          value={values.right}
        />
      </div>
    </div>
  )
}