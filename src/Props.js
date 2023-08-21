import React from 'react'
import List from './List';

function Props() {
    const data=[
        { id: 1, name: "ravi", checked: true },
        { id: 2, name: "It's", checked: false },
        { id: 3, name: "Me", checked: true },
      ];
  return (
    <List greet="hello"/>      //connect List into Props component
  )
}

export default Props