import React from "react";
import Home from "./Home";
import { useState } from "react";

const Welcome = () => {
  let [name, setName] = useState("Sathish");
  const editName = () => {
    setName("Sai");
  };
  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={editName}>Change name</button>

      <Home name={name} />
    </div>
  );
};

export default Welcome;
