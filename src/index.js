import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import component
import Component from "./component";
import AnotherComponent from "./anotherComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Component/>
    <AnotherComponent/>
  </React.StrictMode>
); 
