import React from "react";
import Image from "next/image";
import Button from "../Button";
import { IoMdCall } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import logo from "@/public/companylogo.png";
import { IoLocation } from "react-icons/io5";
import style from "@/styles/footer.module.scss";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.left1}>
        <Image src={logo} className={style.img} alt="" />
        <p className={style.imgp}>
          Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.
          Incidunt <br />
          ducimus veniam reprehenderit natus
        </p>
        <Button name={"More About us"} className={style.button} />
      </div>
      <div className={style.left2}>
        <h3 className={style.word}>NewsLetter</h3>
        <p className={style.leftp}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. In,
          consequatur.
        </p>
        <div className={style.subscribe}>
          <input type="text" placeholder="Your email address" />
          <div className={style.send}>
            <IoIosSend className={style.sendicon} />
          </div>
        </div>
        <div className={style.social}>
          <FaFacebook className={style.socialicon} />
          <FaInstagram className={style.socialicon} />
        </div>
      </div>
      <div className={style.left3}>
        <h3 className={style.word}>Official Info</h3>
        <div className={style.location}>
          <IoLocation className={style.locationicon} />
          <p className={style.locationp}>Goal Chakar, Nankana Sahib</p>
        </div>
        <div className={style.location}>
          <IoMdCall className={style.locationicon} />
          <p className={style.locationp}>+92 3099156184</p>
        </div>
        <div className={style.hour}>
          <h2>Open Hours</h2>
          <p>Mon - Sat: 8am - 5pm</p>
          <p>Friday: Closed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;