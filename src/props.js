import React from "react";

//Import Components
import List from "./components/list";

function Props() {
  const qty = 21
  return (
    // Code Inside div
    <div>
      <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="car image" />
      <List listName="Mercedez Benz" color="red" qty={qty} />
      <List listName="Ferrari" color="blue" />
    </div>
  );
}

export default Props;
