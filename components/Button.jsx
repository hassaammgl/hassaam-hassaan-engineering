import React from "react";
import style from "@/styles/button.module.scss";

const Button = () => {
  return (
    <>
      {/* <button className={style.btn_btn1}>Click Here</button> */}
      {/* <button className={`${style.btn} ${style.btn1}`}>Click Here</button> */}
      <button className={style.button} style={{"--clr": "#FB8122"}}>
        <span>Button</span>
        <i></i>
      </button>
    </>
  );
};

export default Button;
