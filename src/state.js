import React, { useState } from "react";

function State() {
  //init State
  // let counter = 23

  const [counter, setCounter] = useState(23)
  // console.log(counter);

  //Create Function Add
  function Add() {
    // counter = 21
    // console.log(counter);
    setCounter(counter + 1)
  }

  //Create Function Less
  function Less() {
    setCounter(counter - 1)
  }

  return (
    // Code Inside div
    <div>
      <h1>{counter}</h1>
      <p>CLick add button to Adding Value</p>
      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
    </div>
  );
}

export default State;
