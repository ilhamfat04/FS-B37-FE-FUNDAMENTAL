import React from "react";

function Event() {
  //Create function here
  function inputSuccess(){
    return alert("Success input")
  }

  return (
    // Code Inside div
    <div>
      <p>If you click me, alert will be appear!!</p>
      <button onClick={()=> alert("Hello batch 37")} >Click Me</button>
      <input onBlur={inputSuccess} type="text" />
      {/* <button onClick={alert("Hello batch 37")} >Click Me</button> */}
    </div>
  );
}

export default Event;
