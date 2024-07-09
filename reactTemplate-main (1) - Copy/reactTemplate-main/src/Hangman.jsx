import React, { useState, useEffect } from 'react';

const Hangman1 = () => {
    const [words, setWords] = useState([]);
    const [input, setInput] = useState('');
    const [selectedWord, setSelectedWord] = useState('');
    const [guessedLetters, setGuessedLetters] = useState([]);

    const addWord = () => {
        if (input.trim() !== '') {
            setWords(prevWords => [...prevWords, input]);
            setInput('');
        }
    };

    useEffect(() => {
        if (words.length > 0) {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            setSelectedWord(randomWord);
        }
    }, [words]);

    const renderWord = () => {
        return selectedWord.split('').map((letter) =>
            guessedLetters.includes(letter) ? letter : '_'
        ).join(' ');
    };

    const handleGuess = () => {
        if (input.trim() !== '' && !guessedLetters.includes(input)) {
            setGuessedLetters(prevLetters => [...prevLetters, input]);
            setInput('');
        }
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a letter or word"
                />
                <button onClick={addWord}>Add Word</button>
                <button onClick={handleGuess}>Guess Letter</button>
            </div>
            <div>
                {words.map((word, index) => (
                    <h2 key={index}>{word}</h2>
                ))}
            </div>
            <p className="hangman-word">Word: {renderWord()}</p>
        </>
    );
};

export default Hangman1;
