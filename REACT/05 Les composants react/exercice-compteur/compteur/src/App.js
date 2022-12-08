import React, {useState} from 'react'

 const App = () => {
  const [counter, setCounter] = useState(0)
  const handleMinus = () => setCounter(counter - 1)
  const handlePlus = () => setCounter(counter + 1)
        
  return (
  	<div>
      <p>Compteur</p>
    	<button type="button" onClick={handleMinus}>-</button>
      <span>{counter}</span>
      <button type="button" onClick={handlePlus}>+</button>
    </div>
  )
}
export default App
