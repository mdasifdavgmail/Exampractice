import React, { useState } from 'react';

const Searchanddisplay = () => {
    const [inputValue, setInputValue] = useState("");
    const [values, setValues] = useState([]);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState("");
    
    const display = () => {
        setValues(t => ([...t, inputValue]));
        setInputValue("");
    }

    const searchbutton = () => {
        let b = "";
        let temp = "";
        let z = 0;
        let x = "";
        const c = search;

        for (let i = 0; i < values.length; i++) {
            b = values[i];
            temp = "";

            for (let j = 0; j < b.length; j++) {
                temp = "";

                for (let k = j; k < b.length; k++) {
                    temp += b.charAt(k);
                    if (temp === c) {
                        z = 1;
                        break;
                    }
                    if (temp.length === c.length) {
                        temp = "";
                    }
                }

                if (z === 1) {
                    x += values[i] + " ";
                    z = 0;
                    break;
                }
            }
        }

        setSearchResults(x);
        
    }

    return ( 
        <div className="">
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" onClick={display}>Click me</button>

            <input 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchbutton}>Search</button>

            {
                values.map((value, index) => (
                    <div key={index}>
                        <h2>{value}</h2>
                    </div>
                ))
            }

            <div>
                <h2>Search Results: {searchResults}</h2>
                
            </div>
        </div> 
    );
}
 
export default Searchanddisplay;
