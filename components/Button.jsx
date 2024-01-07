import React from "react";
import style from "@/styles/button.module.scss";

const Button = ({name}) => {

  return (
    <>
      <button className={style.button} style={{"--clr": "#FB8122"}}>
        <span>{name === undefined ? "button":name}</span>
        <i></i>
      </button>
    </>
  );
};

export default Button;
