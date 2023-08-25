import React, { useEffect } from "react";
import { useRef } from "react";

function Useref() {
  const use = useRef();
  const clr = ["red", "blue", "green", "orange", "yellow"];

  function cngClr() {
    const rnd = Math.floor(Math.random() * clr.length);
    use.current.style.color = clr[rnd];
  }


  //   console.log(use.current);
  return (
    <div>
      <h1 ref={use}>Ravindrapandian</h1>
      <button onClick={cngClr}>click</button>
    </div>
  );
}

export default Useref;
