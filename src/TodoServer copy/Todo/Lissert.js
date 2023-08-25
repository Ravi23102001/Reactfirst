import { useState } from "react";
import React from "react";
import "./Listser.css";

const List = (probs) => {
  const { data, setData, correction, del, inpVal, setInpVal, submit, use} = probs;
 

  return (
    <>
      <form onSubmit={submit}>
        <div className="d-flex p-2 gap-2">
          <input
            type="text"
            ref={use}
            placeholder="Add Item"
            className="form-control"
            value={inpVal}
            onChange={(e) => setInpVal(e.target.value)}
          />
          <button className="btn btn-success">Add</button>
        </div>
      </form>
      <h1>
        {/* {name} */}
        {/* {greet} */}
      </h1>
      <div className="">
        {data.length ? (
          <ul className="unorder">
            {data.map((item) => (
              <li className="p-3 list-unstyled mx-auto" key={item.id}>
                <input
               
                  type="checkbox"
                  id={item.name}
                  checked={item.checked}
                  onChange={() => correction(item.id)}
                />
                <label htmlFor={item.name}>{item.name}</label>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => del(item.id)}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h1 className="text-center">This list is empty</h1>
        )}
      </div>
    </>
  );
};

List.defaultProps = {
  name: "police",
};

export default List;
