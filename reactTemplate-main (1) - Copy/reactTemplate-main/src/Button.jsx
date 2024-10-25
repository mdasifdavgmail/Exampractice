import { useState } from "react";

const Button = () => {
    const [coll, setColl] = useState(true);
    const [b, setB] = useState('A');

    const handleClick = () => {
        setColl(!coll);
        if(coll){
            setB('A');
        }
        else{
            setB('B');
        }
    };

    return (
        <div className="s1">
            <div className="s2"></div>
            <button onClick={handleClick}>{b}</button>
        </div>
    );
}

export default Button;
