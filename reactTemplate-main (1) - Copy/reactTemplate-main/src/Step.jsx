import { useState } from "react";

const Step2 = () => {
    
    let [value, setValue] = useState(['Hello']);
let [m,setm]=useState(0)
   var temp1="";
  let temp=value[0];
  if(m===0){
  for(let i=0;i<temp.length;i++){
   temp1+=temp.charAt(i);
  }
  setm(1);
}

    let deleteValue = () => {
        let str = "";
        for (let i = 0; i < value[0].length - 1; i++) {
            str += value[0][i];
        }
        setValue([str]); 
    };

    let addValue = () => {
        let str = "";
        let newstr = "";

        
        let temp = originalValue.current; 

        for (let i = 0; i < temp1.length; i++) {
            newstr += temp1.charAt(i);
            if (value[0].length >= newstr.length) {
                str += newstr.charAt(i);
            } else {
                str += newstr.charAt(i);
                break;
            }
        }
        setValue([str]);
    };

    return ( 
        <div className="s1">
            {
                value.map((val, index) =>
                    <h2 key={index}>{val}</h2>
                )
            }
            <button onClick={deleteValue}>delete</button>
            <button onClick={addValue}>add</button>
        </div>
    );
}

export default Step2;
