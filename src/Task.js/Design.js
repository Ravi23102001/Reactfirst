import React from "react";
import { useState } from "react";
// import colorNames from "colorname"

function Design() {
    const [clrName, setClrName]=useState("")
  const [changes, setChanges] = useState({
    name: "Type your Fav color",
    color: "black",
  });
  function type(e) {
    setChanges({ ...changes, name: e.target.value });
    // setClrName(colorname(e.target.value))
  }

  function color(e) {
    const changeColor =
      changes.color === "black"
        ? { ...changes, color: "white" }
        : { ...changes, color: "black" };
    // console.log(changeColor)
    setChanges(changeColor);
  }

  return (
    <div className="container mt-5">
      <div
        style={{
          backgroundColor: changes.name,
          //   width: "500px",
          height: "200px",
          display: "flex",
          color: changes.color,
          border: "2px solid black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{changes.name}</h1>
        <p>{clrName}</p>
      </div>

      <input
        type="text"
        className="form-control my-2"
        placeholder="Type Your Fav color"
        onChange={(e) => type(e)}
      />
      <button
        className="btn btn-secondary mx-auto d-block btn-lg m-2"
        onClick={(e) => color(e)}
      >
        Toggle
      </button>
    </div>
  );
}

export default Design;
