import { useState } from "react";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState([]);
  const [displayValue, setDisplayValue] = useState(""); 

  const display = () => {
    setValues((prevValues) => [...prevValues, inputValue]); 
    setInputValue(""); 

    let currentIndex = -1; 
    setDisplayValue(""); 

    const interval = setInterval(() => {
      if (currentIndex < inputValue.length-1) {
        setDisplayValue((prev) =>[ ...prev ,inputValue[currentIndex]]); 
        currentIndex++;
      } else {
        clearInterval(interval); 
      }
    }, 300); 
  };

  return (
    <div className="s1">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" onClick={display}>
        Click me
      </button>
      <div>
        <h2>{displayValue}</h2> {/* Display the value being typed out */}
      </div>
    </div>
  );
};

export default Searchbar;
