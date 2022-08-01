import React from "react";

// import component Header
import Header from "./components/Header";
import Footer from "./components/footer";

function Component() {
  return (
    //   Code Here
    <>
    <Header/>
      <div>
        <p>Hello Batch 37, ganbate</p>
      </div>

      <Content/>
      <Footer/>
    </>
  );
}

// Create a new component here
function Content(){
  return(
    <p>This is Content</p>
  )
}

export default Component;
