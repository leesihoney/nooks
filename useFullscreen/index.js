import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useFullscreen from "useFullscreen";



const App = () => {
  const onFullS = isFull => {
    console.log(isFull ? "We are full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App">
      <div ref={element}>
        <img src="https://picsum.photos/200/300" alt="example" />
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
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
