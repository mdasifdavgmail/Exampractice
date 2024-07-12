import React, { useState } from 'react';

const Include = () => {
    const [words, setWords] = useState([]);
    const [input, setInput] = useState('');

    const [input1, setInput1] = useState('');
    const [value, setValue] = useState([]); // Ensure this is an array, not a string

    const addWord = () => {
        if (input.trim()) {
            setWords([...words, input]);
            setInput('');
        }
    };

    const find = () => {
        const b = words.filter((word) => input1.includes(word)); 
        setValue(b);
    };

    return ( 
        <div className="include-component">
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a letter or word"
                />
                <button onClick={addWord}>Add Word</button>
                {words.map((word, index) => (
                    <div key={index}>
                        <h2>{word}</h2>
                    </div>
                ))}
                <input
                    type="text"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                    placeholder="Enter a letter or word"
                />
                <button onClick={find}>find</button>
            </div>
            {   
                value.map((val, index) => (  
                    <h2 key={index}>{val}</h2>
                ))
            }
        </div>
    );
};

export default Include;
