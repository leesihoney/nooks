import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useBeforeLeave from "useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Pls don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <App />
  </div>,
  rootElement
);
