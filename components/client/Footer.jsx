import React from 'react'
import style from "@/styles/footer.module.scss";
import Image from 'next/image';
import Button from '../Button';
import logo from "@/public/companylogo.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.left}>
        <div className={style.left1}>
          <Image src={logo} className={style.img}  alt='' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde ducimus veniam reprehenderit natus aperiam.</p>
        <Button name={"More About us"}  />
        </div>
        <div className={style.left2}></div>
      </div>
      <div className={style.right}>
        <div className={style.right1}></div>
        <div className={style.right2}></div>
      </div>
    </div>
  )
}

export default Footer