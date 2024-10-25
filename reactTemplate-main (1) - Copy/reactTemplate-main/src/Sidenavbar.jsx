import { useState } from "react";
import "./sidenavbar.css";

const Sidenavbar = () => {
  let [display, setdisplay] = useState(["home", "Content", "Aboutus"]);
  let [activeIndex, setActiveIndex] = useState(null);

  let add = (ind) => {
    setActiveIndex(ind); 
  };

  return (
    <div className="s1">
      <div className="s2">
        {display.map((val, index) => (
          <h1
            key={index}
            onClick={() => add(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {val}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Sidenavbar;
