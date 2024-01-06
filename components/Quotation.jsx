import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import style from "@/styles/quotation.module.scss";
import Button from "./Button";
import { font } from "./fonts";

const Quotation = () => {
  return (
    <div className={style.quotation}>
      <div className={`${style.left} ${font.ubuntu.className}`}>
        <h2>Gets a Quotation For <br /> Your Work</h2>
      </div>
      <div className={style.right}>
        <div className={style.icon}>
          <div className={style.lright}>
            <FaCirclePlay />
          </div>
          <div className={style.rright}>
            <p>Call us Now</p>
            <p>+92 2348855445</p>
          </div>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Quotation;
