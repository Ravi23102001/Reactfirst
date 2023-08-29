import React from 'react'
import Button from './Button'

function MainBtn({btnTxt,setBtnTxt}) {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <Button btnText="users" btnTxt={btnTxt} setBtnTxt={setBtnTxt}/>
        <Button btnText="posts" btnTxt={btnTxt} setBtnTxt={setBtnTxt} />
        <Button btnText="comments" btnTxt={btnTxt} setBtnTxt={setBtnTxt}/>
    </form>
  )
}

export default MainBtn