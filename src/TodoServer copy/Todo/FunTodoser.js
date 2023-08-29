import React from "react";
import List from "./Lissert";
import Search from "./Searchser";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import request from "./Request";

function FunTodoser() {
  const use = useRef();
  const API_URL = "http://localhost:3000/data";
  let [data, setData] = useState([]);
  const [inpVal, setInpVal] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        console.log(response);
        if (response.ok) {
          const jsonItm = await response.json();
          console.log(jsonItm);
          setData(jsonItm); // api la ulla data va eduthu set data moolam data kku assign pannanum
        } else {
          throw Error("data is not find");
        }
      } catch (err) {
        setError("Data is not found");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => fetchData(), 1000);
  }, []);

  const add = async (item) => {
    console.log(item, "add");
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    console.log(id);
    const newIt = { id, name: item, checked: false };
    console.log(newIt);
    const list = [...data, newIt]; //existing data + new data
    setData(list); // full data assign to data state
    // localStorage.setItem("todo", JSON.stringify(list));
    console.log(data);

    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newIt),  // ithu object 
    };
    const result = await request(API_URL, post);
  };

  const correction = async (id) => {
    const change = data.map((e) =>
      e.id === id ? { ...e, checked: !e.checked } : e
    );
    setData(change);
    // localStorage.setItem("todo", JSON.stringify(change));

    console.log(change, "change");

    const reqChange = change.filter((data) => data.id===id);  //ithu array of object ahh irukkum
    console.log(reqChange, "req");

    
    const update={
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(...reqChange) //object ahh irukkum 
      
      // body:JSON.stringify({checked:reqChange[0].checked})
    }
    const upUrl=`${API_URL}/${id}`
    const result= await request(upUrl,update)
  };

  const del =async (id) => {
    const remind = data.filter((e) => e.id !== id);
    console.log(remind);
    setData(remind); //front la delete agum
    // localStorage.setItem("todo", JSON.stringify(remind));


    const del={
      method:"DELETE"  //server la delete agum
    }
    const delURL=`${API_URL}/${id}`
    const result= await request (delURL,del)
  };

  // console.log(inpVal)

  const submit = (e) => {
    e.preventDefault();
    if (!inpVal) return;
    console.log(inpVal, "jj");
    add(inpVal);
    use.current.focus();
    setInpVal("");
  };

  return (
    <>
      <h1 className="text-center text-danger">Server Todo</h1>
      <Search search={search} setSearch={setSearch} />
      <main>
        {loading && (
          <div
            className="spinner-border text-primary d-block mx-auto"
            role="status"
          ></div>
        )}
        {error && <p className="text-danger text-center">{error}</p>}
        {!error && !loading && (
          <List
            data={data.filter((data) =>
              data.name.toLowerCase().includes(search.toLowerCase())  // search kaga ithu 
            )} //search la ullathaiyum data la ullathaiyum filter pannum
            setData={setData}
            correction={correction}
            del={del}
            inpVal={inpVal}
            setInpVal={setInpVal}
            use={use}
            submit={submit}
          />
        )}
      </main>
    </>
  );
}

export default FunTodoser;
