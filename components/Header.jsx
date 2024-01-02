import React from 'react'
import company from "@/public/companylogo.png";
import Image from 'next/image';
import style from "@/styles/header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
        <Image src={company} />
    </div>
  )
}

export default Header
