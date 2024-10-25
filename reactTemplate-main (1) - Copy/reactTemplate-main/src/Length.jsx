import React, { useState } from 'react';

const Length = () => {
    const [inputValue, setInputValue] = useState("");
    const [values, setValues] = useState([]);
    const [temp, setTemp] = useState('');
    const [temp1, setTemp1] = useState(true);
    const [temp2, setTemp2] = useState(false);

    const display = () => {
        setValues(prevValues => [...prevValues, inputValue]);
        setInputValue("");
        setTemp1(true)
        setTemp2(false)
    }

    const add = () => {
        if (values.length >= 3) {
            setTemp("Welcome");
        } else {
            setTemp("Less than 3");
        }
        setTemp1(false)
        setTemp2(true);
    }

    return ( 
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="button" onClick={display}>Click me</button>
            <button onClick={add}>Submit</button>
            {
                temp1&&values.map((val, index) => 
                    <h2 key={index}>{val}</h2>
                )
            }
            {
            temp2&&<h2>{temp}</h2>}
        </div>
    );
}

export default Length;
