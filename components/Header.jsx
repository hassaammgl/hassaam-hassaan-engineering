"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaAward } from "react-icons/fa";
import company from "@/public/companylogo.png";
import style from "@/styles/header.module.scss";
import { LiaCertificateSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { ubuntu, roboto } from "@/components/fonts";
import Link from "next/link";
import Button from "./Button";
import { AiFillClockCircle, AiFillMedicineBox } from "react-icons/ai";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const HandleMenuOpen = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  };
  return (
    <div className={`${style.header} ${ubuntu.className} ${style.bounce}`}>
      <div className={style.upperheader}>
        <Link href={"/"}>
          <Image className={style.img} alt="" src={company} />
        </Link>
        <div className={`${style.customer} ${roboto.className}`}>
          <div className={style.icon}>
            <RiCustomerService2Line className={style.headericon} />
          </div>
          <div className={style.content}>
            <h2>24/7</h2>
            <p>Customer Service</p>
          </div>
        </div>
        <div className={style.customer}>
          <div className={style.icon}>
            <LiaCertificateSolid className={style.headericon} />
          </div>
          <div className={style.content}>
            <h2>ISO 9001</h2>
            <p>Certification Company</p>
          </div>
        </div>
        <div className={style.customer}>
          <div className={style.icon}>
            <FaAward className={style.headericon} />
          </div>
          <div className={style.content}>
            <h2>Qualified</h2>
            <p>Expert Professional</p>
          </div>
        </div>
      </div>
      <div className={style.links}>
        <div className={`${style.link} ${roboto.className}`}>
          <Link href={"/"}>Home</Link>
          <Link href={"/Services"}>Services</Link>
          <Link href={"/Products"}>Products</Link>
          <Link href={"/Contact"}>Contact Us</Link>
        </div>
        <Button name={"Get a Quote"} />
      </div>

      <div className={style.response}>
        <button onClick={HandleMenuOpen}>
          {menuOpen ? <AiFillClockCircle /> : <AiFillMedicineBox />}
        </button>
        {menuOpen && (
          <div className={style.responsive}>
            <Link href={"/"}>Home</Link>
            <Link href={"/Services"}>Services</Link>
            <Link href={"/Products"}>Products</Link>
            <Link href={"/Contact"}>Contact Us</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
