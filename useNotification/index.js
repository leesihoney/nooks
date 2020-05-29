import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useNotification from "useNotification";

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi. don't you? "
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>Notify</button>
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
