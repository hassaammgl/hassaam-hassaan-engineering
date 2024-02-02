import React from 'react'
import style from  "@/styles/productdetails.module.scss";
import Image from 'next/image';
import bg from "@/Images/girl.jpg";

const Product = () => {
  return (
    <>
    <div className={style.card}>
      <Image src={bg} class={style.cardimg} alt="" />
      <div className={style.cardbody}>
        <h1 className={style.cardtitle}>HHE</h1>
        <p className={style.cardsubtitle}>Your Dream Come True Company</p>
        <div className={style.cardinfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, hic?
        </div>
        <button className={style.cardbtn}>View Full Plan</button>
      </div>
    </div>
    </>
  )
}

export default Product