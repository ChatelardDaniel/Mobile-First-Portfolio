//Nom du fichier : FormInput.js
import React from 'react';

const FormInput = (props) => {
  return (
    <div className="form-input-wrapper">
      <label htmlFor={props.inputId}>{props.label}</label><br/>
      <input 
        type="text"
        name={props.inputId}
        id={props.inputId}
        placeholder={props.placeholder}
        
      />
    </div>
  );
}

export default FormInput;