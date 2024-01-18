import React from "react";
import style from "@/styles/about.module.scss";
import Image from "next/image";
import img from "@/Images/girl.jpg";

const About = () => {
  return (
    <>
      <h2 className={style.h2}>About HHE</h2>
      <div className={style.about}>
        <div className={style.left}>
          <Image src={img} alt="aboutimg" />
        </div>
        <div className={style.right}>
          <h2>Providing Full Range of High Services Solution Worldwide</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            impedit qui? Ut, ratione. Esse, fuga. Cupiditate excepturi possimus
            alias.
          </p>
          <div className={style.container}>
            <div className={style.box}>
              <div className={style.icon}></div>
              <h3>Worldwide Manufacturing</h3>
              <p className={style.p1}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
            <div className={style.box}>
              <div className={style.icon}></div>
              <h3>Best Quality Services</h3>
              <p className={style.p1}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
