import React from "react";

function EmbedExpression() {
  //Create function here
  function getMajor(){
    return "Fullstack"
  }

  function greeting(){
    return alert("Haiii")
  }
  //Create a variable here
  const companyName = "Dumbways.ID"

  return (
    // Code Inside div
    <div>
      <h1>Welcome to {companyName} </h1>
      <p>Hello batch 37 {getMajor()}</p>
      <button onClick={()=>greeting}>CLick Me</button>
    </div>
  );
}

export default EmbedExpression;
