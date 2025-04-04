import "./Result.css"

export default function Result({calculationResult}){
  return(
    <div className="result-container">
      <div>=</div>
      <div className="result">{calculationResult}</div>
    </div>
  )
}