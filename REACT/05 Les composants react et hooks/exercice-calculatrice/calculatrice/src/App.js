import React, {useState} from 'react'

const App = () => {
  const [firstNumber, setFirstNumber] = useState(null)
  const [secondNumber, setSecondNumber] = useState(null)
  const [result, setResult] = useState('')
  return (
    <div className="App">
      <h1>Calculatrice</h1>
      <input type="number" onChange={(e)=> {setFirstNumber(parseInt(e.target.value))}} />
      <input type="number" onChange={(e)=> {setSecondNumber(parseInt(e.target.value))}} />
      <button onClick={() => { setResult(firstNumber + secondNumber)}}>Addition</button>
      <button onClick={() => { setResult(firstNumber - secondNumber)}}>Soustraction</button>
          <h2>Votre résultat : {result}</h2>
      </div>
  )
}
export default App

