import React from "react";
import "./Button.css";

function Button({ btnText, btnTxt, setBtnTxt }) {
  return (
    <button
      className={btnText === btnTxt ? "select" : null}
      onClick={() => setBtnTxt(btnText)}
      
    >
      {btnText}
    </button>
  );
}

export default Button;
