import React, { useState } from "react";
import "./App.css";

const DisplayItem = (props) => {
  const [Text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={Text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button className="plus">+</button>
      <button className="minus">-</button>
    </div>
  );
};

export default DisplayItem;
