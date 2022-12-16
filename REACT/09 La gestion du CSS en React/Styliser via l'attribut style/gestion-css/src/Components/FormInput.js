import React, {useState} from 'react';

const FormInput = ({label, placeholder,labelColor}) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    let myStyle = {color: labelColor };
    
    return (
    <div>
        <label style={myStyle}>
            {label}
        </label>
        <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
        />
    </div>
    );
};

export default FormInput;