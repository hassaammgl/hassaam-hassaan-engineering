import React from "react";
import style from "@/styles/footer.module.scss";
import Image from "next/image";
import Button from "../Button";
import logo from "@/public/companylogo.png";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.left}>
        <div className={style.left1}>
          <Image src={logo} className={style.img} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            unde ducimus veniam reprehenderit natus aperiam.
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
      </div>
      <div className={style.right}>
        <div className={style.right1}></div>
        <div className={style.right2}></div>
      </div>
    </div>
  );
};

export default Footer;
