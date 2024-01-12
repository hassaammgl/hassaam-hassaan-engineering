import React from "react";
import { MdAddIcCall } from "react-icons/md";
import style from "@/styles/achievement.module.scss";

const Achievement = () => {
  return (
    <div className={style.achievement}>
      <h1>Our Achivements</h1>
      <div className={style.box}>
        <div className={style.container}>
          <div className={style.icon}>
            <MdAddIcCall />
          </div>
          <div className={style.content}>
            <h2>1,500+</h2>
            <p>Chain of Factories</p>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.icon}>
            <MdAddIcCall />
          </div>
          <div className={style.content}>
            <h2>1,500+</h2>
            <p>Chain of Factories</p>
          </div>
        </div>
        <div className={style.container}>
          <div className={style.icon}>
            <MdAddIcCall />
          </div>
          <div className={style.content}>
            <h2>1,500+</h2>
            <p>Chain of Factories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
