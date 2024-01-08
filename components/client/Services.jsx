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
          <h3>BUYER</h3>
          <h2>JONI HENA</h2>
          <p><span>"</span> I feel very happy and proud to connect with this company. I prefer to anyone they done their work from this platform. I wish very good luck & success for this Company. <span>"</span></p>
          </div>
        </div>
    </div>
  )
}

export default Services
