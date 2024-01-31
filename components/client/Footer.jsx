import React from "react";
import style from "@/styles/footer.module.scss";
import Image from "next/image";
import Button from "../Button";
import logo from "@/public/companylogo.png";
import { IoIosSend } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.left1}>
        <Image src={logo} className={style.img} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde
          ducimus veniam reprehenderit natus aperiam.
        </p>
        <Button name={"More About us"} />
      </div>
      <div className={style.left2}>
        <h3 className={style.word}>NewsLetter</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
          consequatur.
        </p>
        <div className="subscribe">
          <input type="text" placeholder="Your email address" />
          <div className={style.send}>
            <IoIosSend className={style.icon} />
          </div>
        </div>
      </div>
      <div className={style.left3}>
        <h3 className={style.word}>Official Info</h3>
        <div className={style.location}>
          <IoLocation />
        </div>
        <div className={style.location}>
          <IoMdCall />
        </div>
        <h2>Open Hours</h2>
        <p>Mon - Sat: 8am - 5pm</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Footer;
