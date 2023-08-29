import React from 'react'

function Td({value}) {
  return (
    <>
    <td>{JSON.stringify(value)}</td>
    </>
  )
}

export default Td