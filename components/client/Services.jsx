import React from 'react'
import Image from 'next/image';
import client from "@/Images/girl.jpg";
import style from "@/styles/services.module.scss";

const Services = () => {
  return (
    <div className={style.services}>
        <div className={style.left}>
          leftsection
        </div>
        <div className={style.right}>
          <div className={style.rightcontent}>
          <Image className={style.clientimg} src={client} alt='client' />
          </div>
        </div>
    </div>
  )
}

export default Services
