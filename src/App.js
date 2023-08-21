

import "./App.css";
import Ravi from "./Ravi";

import { useState } from 'react';
import './App.css';


function App() {
  
  const [box, setBox] = useState({
    name: 'Ravi',
    bgColor: 'blue',
    width: 400,
    opacity: 1,
    color: "green",
    height: 100,
  });


  const updateBoxName = (e) => {
    // console.log(...box)
    setBox({ ...box, name: e.target.value });
  };

  const updateBakcgroundColor = (e) => {
    console.log(e.target.value)
    setBox({ ...box, bgColor: e.target.value }
      );
  };

  const updateBoxWidth = (e) => {
    setBox({ ...box, width: parseInt(e.target.value) });
  };

  const updateBoxHeight = (e) => {
    setBox({ ...box, height: parseInt(e.target.value) });
  };

  const changecolor=(e)=>{
    console.log(e.target.value)
    setBox({...box, color: e.target.value })
  }

  const range=(e)=>{
    // console.log(e.target.value)
    const opa=e.target.value/10;
    // console.log(typeof(Number(opa)))
    setBox({...box, opacity: Number(opa)})
  }
  return (
    
    <div style={{ padding: 30}}>
      
      <div
        style={{
          width: box.width,
          color: box.color,
          height: box.height,
          background: box.bgColor,
          opacity:box.opacity,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>{box.name}</h1>
      </div>

      
      <div
        style={{
          marginTop: 30,
          width: 400,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3>Change the Apparence of the Box:</h3>
        <p>Box Name:</p>
        <input type='text' value={box.name} onChange={updateBoxName} />

        <p>Text color</p>
        <select name="color" id="color" onChange={changecolor}>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
        </select>

        <p>Opacity <span>{box.opacity}</span></p>
        <input type="range" min={0} max={10} onChange={range} />

        <p>Background Color:</p>
        <select value={box.bgColor} onChange={updateBakcgroundColor}>
          <option value='blue'>Blue</option>
          <option value='red'>Red</option>
          <option value='green'>Green</option>
          <option value='orange'>Orange</option>
        </select>

        <p>Box Width:</p>
        <input type='number' value={box.width} onChange={updateBoxWidth} />

        <p>Box Height:</p>
        <input type='number' value={box.height} onChange={updateBoxHeight} />
      </div>
    </div>
  );
}

export default App;
