import React from 'react'
import style from  "@/styles/productdetails.module.scss";
import Image from 'next/image';
import bg from "@/Images/girl.jpg";

const Product = () => {
  return (
    <>
    <div className={style.productdetail}>
      <div className={style.box}>
        <Image src={bg} alt='girlimg'  />
        <div className={style.content}>
          <p>This Product is made for the purpose for the living things</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product