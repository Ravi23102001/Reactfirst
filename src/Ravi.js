import { useState } from "react"

function Ravi() {
   let [chan,setChan]=useState("Sleep")
   let [color, setColor]=useState("yellow")
function change(){
    let arr=["Sleep","Eat","Learn"]
    let int =Math.floor(Math.random()*3)
    let changes=arr[int]
    if(arr[int]==="Sleep"){
        setColor(color="red")
    }
    else if(changes==="Eat"){
        setColor(color="blue")

    }
    else{
        setColor(color="orange")
    }
// console.log(int)
setChan(arr[int])
}

    return (
        <div>
            <h1>Do <span style={{color:color}} >{chan}</span></h1>
            <button onClick={change} className="btn btn-success btn-lg px-5">Click</button>
        </div>
    )


    
}
export default Ravi