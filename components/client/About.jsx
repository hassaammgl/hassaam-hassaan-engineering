import React from 'react';
import style from "@/styles/about.module.scss";
import Image from 'next/image';
import img from "@/Images/girl.jpg";

const About = () => {
  return (
    <div className={style.about}>
        <div className={style.left}>
          <Image src={img} alt='aboutimg' />
        </div>
        <div className={style.right}></div>
    </div>
  )
}

export default About;