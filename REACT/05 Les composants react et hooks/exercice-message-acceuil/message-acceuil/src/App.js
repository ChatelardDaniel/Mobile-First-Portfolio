import React, {useState} from 'react'

const App = () => {
  const [name, setName] = useState(null)
  const [inputVal, setInputVal] = useState("")
  return (
    <div className="App">
        <h1>Bienvenu {name}</h1>
	      <input type="text" onChange={(e)=> {setInputVal(e.target.value)}} />
        <button onClick={() => { setName(inputVal)}}>Valider</button>
    </div>
  )
}
export default App
