import { useState } from "react";
import "./logo.css";
export const Form = ({ item, setItem }) => {
  const [inputText, setInputText] = useState("");
  const [quantity, setQuantity] = useState(1);
  function addItem() {
    const passingValueBySpread = [...item];
    passingValueBySpread.unshift({
      quantity: quantity,
      userText: inputText,
      packed: false,
    });
   setItem(passingValueBySpread)
  }
  return (
    <div className="inputBarParent">
      <p>What do you need for 😍 your trip?</p>
      <div className="inputBar2">
      <select
        onChange={(e) => setQuantity(e.target.value)}
        name="cars"
        className="cars"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <input
        type="text"
        onChange={(e) => setInputText(e.target.value)}
        className="inputBar"
        placeholder="Items..."
      />
      <button className="addBtn" onClick={addItem}>
        ADD
      </button>
    </div>
    </div>
  );
};
