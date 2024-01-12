import React from "react";
import Image from "next/image";
import client from "@/Images/girl.jpg";
import { MdAddIcCall } from "react-icons/md";
import style from "@/styles/client.module.scss";
import Button from "../Button";

const Services = () => {
  return (
    <div className={style.services}>
      <div className={style.left}>
        <h3 className={style.clientsay}>WHAT OUR CLIENT SAY</h3>
        <h2 className={style.h2}>
          Happy With <br /> Customers & Clients
        </h2>
        <p className={style.p}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          aliquam distinctio omnis iusto ea ex qui ipsum delectus officia
          laborum ut molestiae commodi soluta laboriosam, explicabo iste?
          Aspernatur.
        </p>
        <div className={style.call}>
          <div className={style.icon}>
            <MdAddIcCall />
          </div>
          <div className={style.callcontent}>
            <p className={style.callp}>Have any Questions? Give us a call.</p>
            <h2 className={style.callh2}>+92 1234567890</h2>
          </div>
        </div>
        <div className={style.btn}>
        <Button name={"OUR SERVICES"} />
        </div>
      </div>
      <div className={style.right}>
        <div className={style.rightcontent}>
          <Image className={style.clientimg} src={client} alt="client" />
          <h3>BUYER</h3>
          <h2>JONI HENA</h2>
          <p>
            I feel very happy and proud to connect with this company. I prefer
            to anyone they done their work from this platform. I wish very good
            luck & success for this Company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
