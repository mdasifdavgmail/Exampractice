import { useState } from "react";

const Selecttask = () => {
    const [items] = useState(["item1", "item2", "item3", "item4"]);
    const [selectedItem, setSelectedItem] = useState(null);

    const add = (ind) => {
        setSelectedItem(items[ind]);
        if (ind === 0) {
            return items[0];
        } else if (ind === 1) {
            return items[1];
        } else if (ind === 2) {
            return items[2];
        } else if (ind === 3) {
            return items[3];
        }
    };

    return (
        <div className="s2">
            {items.map((item, index) => (
                <h2 key={index} onClick={() => add(index)}>{item}</h2>
            ))}
             {selectedItem && <p>{selectedItem}</p>}
        </div>
    );
}

export default Selecttask;
