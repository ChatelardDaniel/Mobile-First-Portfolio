import React from "react";
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  return (
    <div className="App">
      <FormInput 
        label="Prénom"
        placeholder="Votre prénom"
      />
    </div>
  );
}

export default App;

