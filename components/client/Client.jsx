import React from "react";
import Image from "next/image";
import client from "@/Images/girl.jpg";
import style from "@/styles/client.module.scss";

const Services = () => {
  return (
    <div className={style.services}>
      <div className={style.left}>
        <h3>WHAT OUR CLIENT SAY</h3>
        <h2>Happy With <br /> Customers & Clients</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, aliquam distinctio omnis iusto ea ex qui ipsum delectus officia laborum ut molestiae commodi soluta laboriosam, explicabo iste? Aspernatur.</p>
        <div className={style.call}>
          <div className={style.icon}>
            
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.rightcontent}>
          <Image className={style.clientimg} src={client} alt="client" />
          <h3>BUYER</h3>
          <h2>JONI HENA</h2>
          <p>
            {" "}
            I feel very happy and proud to connect with this company. I prefer
            to anyone they done their work from this platform. I wish very good
            luck & success for this Company.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
