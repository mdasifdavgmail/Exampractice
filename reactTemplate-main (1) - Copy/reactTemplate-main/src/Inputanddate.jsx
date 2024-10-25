import { useState } from "react";

const Inputanddate = () => {
    const [value, setValue] = useState([]);
    const [input, setInput] = useState('');
    const [value1, setValue1] = useState([]);
    const [input1, setInput1] = useState('');

    const addWord = () => {
        if (input && input1) {
            setValue((prev) => [...prev, input]);
            setValue1((prev) => [...prev, input1]);
            setInput(''); 
            setInput1('');
        } else {
            alert("Enter both the inputfield");
        }
    };

    return ( 
        <div className="s1">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a letter or word"
            />
            <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Enter"
            />
            <button onClick={addWord}>Add Word</button>
            {
                value.map((val, index) => (
                    <h2 key={index}>{val}</h2>
                ))
            }
            {
                value1.map((val, index) => (
                    <h2 key={index}>{val}</h2>
                ))
            }
        </div>
    );
}
 
export default Inputanddate;
