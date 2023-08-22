import { useState } from "react";
import React from "react";
import "./List.css";

const List = (probs) => {
  const { data, setData, correction, del, inpVal, setInpVal, submit, use} = probs;
  // console.log(probs.trial)
  // const trial = [
  //   { id: 1, name: "Ravi", checked: true },
  //   { id: 2, name: "It's", checked: true },
  //   { id: 3, name: "Me", checked: true },
  //   { id: 4, name: "Think Positive", checked: true },
  //   { id: 5, name: "Avoid Negative", checked: true },
  // ];
  // // const { details } = e;
  // const [data, setData] = useState(trial);
  // // const {data}=details
  // // console.log(details[1].name)

  // // const [name, setName] = useState([
  // //   { id: 1, name: "ravi", checked: true },
  // //   { id: 2, name: "It's", checked: false },
  // //   { id: 3, name: "Me", checked: true },
  // // ]);
  // const correction = (id) => {
  //   const change = data.map((e) =>
  //     e.id === id ? { ...e, checked: !e.checked } : e
  //   );
  //   setData(change);

  //   console.log(change);
  // };

  // const del = (id) => {
  //   const remind = data.filter((e) => e.id !== id);
  //   console.log(remind);
  //   setData(remind);
  // };

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
