import { useState } from "react";
import "./select.css";

const Selected = () => {
    const [words, setWords] = useState([]);
    const [input, setInput] = useState('');
    const [selectedWord, setSelectedWord] = useState('');

    const addWord = () => {
        if (input.trim() !== '') {
            setWords(prevWords => [...prevWords, input]);
            setInput('');
        }
    };

    const handleRadioChange = (word) => {
        setSelectedWord(word);
    };

    const handleDivClick = (word) => {
       
        setSelectedWord(selectedWord === word ? ' ' : _);
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a letter or word"
            />
            <button onClick={addWord}>Add Word</button>
            {words.map((word, index) => (
                <div
                    key={index}
                    className={selectedWord === word ? "s1" : " "}
                    onClick={() => handleDivClick(word)}
                >
                    <div className="s2">
                    <input
                        type="radio"
                        name="word"
                        value={word}
                        checked={selectedWord === word}
                        onChange={() => handleRadioChange(word)}
                    />
                    <h2>{word}</h2>
                </div> </div>
            ))}
        </div>
    );
};

export default Selected;
