import React, {useState} from 'react';
import './FormInput.css';// import de la feuille de style

const FormInput = ({label, placeholder}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    // le nom des classes en React commence par une majuscule, className="LabelInput".
    return (
    <div>
        <label className="LabelInput">
            {label}
        </label>
        <input
            type="text"
            className="Input"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
        />
    </div>
    );
};

export default FormInput;