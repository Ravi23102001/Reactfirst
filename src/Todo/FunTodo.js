import React from "react";
import List from "./List";
import Search from "./Search";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function FunTodo() {
  const use=useRef()

  // console.log(JSON.parse(localStorage.getItem("todo")))
  // const trial = JSON.parse(localStorage.getItem("todo"));
  // data=JSON.parse(localStorage.getItem("todo"))
  //   { id: 1, name: "Ravi", checked: true },
  //   { id: 2, name: "It's", checked: true },
  //   { id: 3, name: "Me", checked: true },
  //   { id: 4, name: "Think Positive", checked: true },
  //   { id: 5, name: "Avoid Negative", checked: true },

  let [data, setData] = useState(JSON.parse(localStorage.getItem("todo"))||[]);
  const add = (item) => {
    console.log(item, "hs");
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    console.log(id);
    const newIt = { id, name: item, checked: false };
    console.log(newIt);
    const list = [...data, newIt];
    setData(list);
    localStorage.setItem("todo", JSON.stringify(list));
    console.log(list);
  };

  // const { details } = e;

  // const {data}=details
  // console.log(details[1].name)

  // const [name, setName] = useState([
  //   { id: 1, name: "ravi", checked: true },
  //   { id: 2, name: "It's", checked: false },
  //   { id: 3, name: "Me", checked: true },
  // ]);
  const correction = (id) => {
    const change = data.map((e) =>
      e.id === id ? { ...e, checked: !e.checked } : e
    );
    setData(change);
    localStorage.setItem("todo", JSON.stringify(change));

    console.log(change);
  };

  const del = (id) => {
    const remind = data.filter((e) => e.id !== id);
    console.log(remind);
    setData(remind);
    localStorage.setItem("todo", JSON.stringify(remind));
  };

  const [inpVal, setInpVal] = useState("");
  const [search, setSearch] = useState("");
  // console.log(inpVal)


  useEffect(() => {
      console.log("ravindra")
  
  },[]);

  const submit = (e) => {
    e.preventDefault();
    if (!inpVal) return;
    console.log(inpVal, "jj");
    add(inpVal);
    use.current.focus()
    setInpVal("");

    // alert("hai");
  };

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <List
        data={data.filter((data) =>
          data.name.toLowerCase().includes(search.toLowerCase())
        )} //search la ullathaiyum data la ullathaiyum filter pannum
        setData={setData}
        correction={correction}
        del={del}
        inpVal={inpVal}
        setInpVal={setInpVal}
        use={use}
        submit={submit}
      />
    </>
  );
}

export default FunTodo;
