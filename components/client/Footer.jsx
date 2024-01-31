import React from 'react'
import style from "@/styles/footer.module.scss";
import Image from 'next/image';
import logo from "@/public/companylogo.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.left}>
        <div className={style.left1}>
          <Image src={logo}  alt='' />
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