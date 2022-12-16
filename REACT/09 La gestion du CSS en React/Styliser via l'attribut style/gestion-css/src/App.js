import React from "react";
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  return (
    <div className="App">
      <FormInput 
        label="Prénom"
        placeholder="Votre prénom"
        labelColor="#a55eea"
      />
    </div>
  );
}

export default App;
