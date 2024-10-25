import { useState } from "react";
import "./visivle.css"; // Import the updated CSS

const Visible = () => {
  const [right, setright] = useState(false); 
  const [left, setleft] = useState(true);  

  const add1 = () => {
    setright(true); 
    setleft(false); 
  };

  const add = () => {
    setleft(true); 
    setright(false); 
  };

  return (
    <div className="container">
      <div className="box">
        {/* Slider element for the sliding effect */}
        <div className="slider" style={{ transform: right ? "translateX(100%)" : "translateX(0)" }}></div>

        {/* Buttons */}
        <button onClick={add}>Sign in</button>
        <button onClick={add1}>Sign out</button>
      </div>
      
      {/* Sign In Section */}
      {left && (
        <>
          <h1>hello</h1>
          <div className="card-container">
            <div className="card">JavaScript</div>
            <div className="card">Java</div>
            <div className="card">Python</div>
          </div>
        </>
      )}

      {/* Sign Out Section */}
      {right && (
        <>
          <h1>hello hii bye</h1>
          <div className="card-container">
            <div className="card">React</div>
            <div className="card">MongoDB</div>
            <div className="card">Rust</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Visible;
