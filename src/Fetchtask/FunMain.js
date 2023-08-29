import React, { useEffect, useState } from "react";
import MainBtn from "./MainBtn";
import List from "./List";

function FunMain() {
  const [btnTxt, setBtnTxt] = useState("users");
  const [data, setData] = useState([]);
  console.log(btnTxt);
  const API = "https://jsonplaceholder.typicode.com/";

  useEffect(() => {
    const fet = async () => {
      try {
        const fetApi = await fetch(`${API}${btnTxt}`);
        const response = await fetApi.json();
        // console.log(response);
        setData(response);
      } catch (error) {}
    };
    fet()
  },
    [btnTxt]);


  return (
    <div>
      <MainBtn btnTxt={btnTxt} setBtnTxt={setBtnTxt} />
      <List data={data}/>
    </div>
  );
}

export default FunMain;
