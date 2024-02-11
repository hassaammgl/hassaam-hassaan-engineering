import React from "react";
import style from "@/styles/button.module.scss";

const Button = ({name}) => {

  return (
    <>
      <button className={style.button} >
        <span>{name === undefined ? "button":name}</span>
      </button>
    </>
  );
};

export default Button;
