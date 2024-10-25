import { useState } from "react";
import "./last.css"
const Last = () => {
    const [words, setWords] = useState([]);
    const [input, setInput] = useState([]);
    const [value,setvalue]=useState([]);
    const addWord = () => {
        if (input.trim()) {
            setWords([...words, input]);
          
            setInput('');
        }
    };
    let add=(ind)=>{
        setInput(t=>[...t,ind].join(''));

    }
    return (
         <div className="s1">
                 <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a letter or word"
                />
                <button onClick={addWord}>Add Word</button>
                <h2>{words}</h2>
                <button className="s2"><h2 onClick={()=>add(1)}>1</h2><h2 onClick={()=>add(2)}>2</h2><h2 onClick={()=>add(3)}>3</h2><h2 onClick={()=>add(4)}>4</h2><h2 onClick={()=>add(5)}>5</h2><h2 onClick={()=>add(6)}>6</h2><h2 onClick={()=>add(7)}>7</h2><h2>8</h2></button>

    </div> );
}
 
export default Last;