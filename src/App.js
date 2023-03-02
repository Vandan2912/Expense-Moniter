import React, { useState } from "react";
import DisplayItem from "./DisplayItem";

const App = () => {
  const [Data, setData] = useState([]);

  return <div className="App">{Data.length == 0 ? <DisplayItem /> : {}}</div>;
};

export default App;
