import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useClick from "useClick";

const App = () => {
  const sayHello = () => console.log("sayHello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
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
